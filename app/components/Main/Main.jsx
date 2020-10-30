import React from "react";
import $ from "jquery";
import 'jquery-ui-dist/jquery-ui';

let posts = [
    {
        title: "Привет!",
        text: "ВОТО-Че придумал",
        id:"1",
        X:50,
        Y:70
    },
    {
        title: "Приветули!",
        text: "Ниче не придумал...",
        id:"2",
        X:200,
        Y:100
    }
]

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.addButton_click = this.addButton_click.bind(this);
        let ideas = JSON.parse(sessionStorage.getItem('ideas'));
        console.log(ideas);
        if (ideas) this.state = {ideas:ideas};
        else {
            this.state = {ideas: posts};
        }
        this.stopDrag = this.stopDrag.bind(this);
        
    }

    componentDidUpdate() {
        $('.ideaList li').draggable(
            {stop: this.stopDrag
        });
    }

    addButton_click() {
        this.setState({
             ideas: this.state.ideas.concat({title: 'new', id: new Date().getTime()})
        })
    }

    stopDrag(event, ui) {
        let newIdeas = this.state.ideas.slice();        
        let id = event.target.id;
        newIdeas[id].X = ui.position.left;
        newIdeas[id].Y = ui.position.top;
        this.setState({ideas: newIdeas})
    }

    componentDidMount() {
        $('.ideaList li').draggable(
        {stop: this.stopDrag
        });
    }

    componentDidUpdate() {
        sessionStorage.setItem('ideas', JSON.stringify(this.state.ideas));
    }

    render() {
        if (!this.props.user) return null;
        return(
            <div>
                <div className='navbar'>
                    <div className='addButton' onClick={this.addButton_click}></div>
                    <span className='useremail'>{this.props.user.email}</span>
                </div>
                <ul className='ideaList'>
                    {this.state.ideas.map((post, i)=> 
                    <li style={{top: post.Y, left: post.X}} className='idea' id={i} key={post.id}>
                        <div className='idea-title' >{post.title.length>10? post.title.slice(0, 10)+"...":post.title}</div>
                    </li>)}
                </ul>
            </div>
        )
    }
} 

export default Main;