import React from "react";
import $, { trim } from "jquery";
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
        this.liDrag();
        API.UpdateUserIdeas(this.props.user.id, {ideas: this.props.user.ideas});
    }


    liDrag() {
        $('.ideaList li').draggable(
            {
                stop: this.props.stopDrag,
                cursor: "pointer",
                containment: 'div.container',
                grid: [100, 100],
                cancel: 'idea-title'
        });
    }




    componentDidMount() {
        this.liDrag();
    }

    openDialog(event) {
        let $target = event.target;
        $('.change-window').draggable();
        document.getElementsByClassName('change-window')[0].classList.add('displayed');
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
                    <li onClick={this.openDialog} style={{top: post.Y, left: post.X, position:"absolute"}} className='idea' id={i} key={post.id}>
                        <div className='idea-title' >{post.title.length>10? post.title.slice(0, 10)+"...":post.title}</div>
                        <div>{post.text}</div>
                    </li>)}
                </ul>
                <div className='change-window'>
                    <input className='titleInput' placeholder='Введите заголовок'></input>
                    <br></br>
                    <textarea className='textInput' placeholder='Введите текст' rows='3'></textarea>
                    <button>Сохранить!</button>
                </div>
            </div>
        )
    }
} 

export default Main;