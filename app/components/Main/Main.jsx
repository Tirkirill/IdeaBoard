import React from "react";
import $ from "jquery";
import 'jquery-ui-dist/jquery-ui';
import * as API from "../../backend/API";

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
    }

    componentDidUpdate() {
        $('.ideaList li').draggable(
            {stop: this.props.stopDrag
        });
        API.UpdateUserIdeas(this.props.user.id, {ideas: this.props.user.ideas});
    }

    componentDidMount() {
        $('.ideaList li').draggable(
        {
            stop: this.props.stopDrag,
            cursor: "pointer",
            containment: 'div.container',
            grid: [100, 100]
        });
    }

    render() {
        if (!this.props.user) return null;
        console.log(this.props.user.ideas);
        return(
            <div className='container'>
                <div className='navbar'>
                    <div className='addButton' onClick={this.props.addIdea}></div>
                    <span className='useremail'>{this.props.user.email}</span>
                </div>
                <ul className='ideaList'>
                    {this.props.user.ideas.map((post, i)=> 
                    <li style={{top: post.Y, left: post.X}} className='idea' id={i} key={post.id}>
                        <div className='idea-title' >{post.title.length>10? post.title.slice(0, 10)+"...":post.title}</div>
                    </li>)}
                </ul>
            </div>
        )
    }
} 

export default Main;