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
        this.openDialog = this.openDialog.bind(this);
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
        let id = event.target.id;
        $('.change-window').draggable();
        document.getElementsByClassName('change-window')[0].classList.add('displayed');
        $('.change-window button').on('click', this.saveChange.bind(this, id));
    }

    saveChange(id) {
        let titleInput = document.getElementById('titleInput');
        let textInput = document.getElementById('textInput');
        let title = titleInput.value;
        let text = textInput.value;
        this.props.changeIdea(id, text, title);
        document.getElementsByClassName('change-window')[0].classList.remove('displayed');
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
                        <div className='idea-text'>{post.text}</div>
                    </li>)}
                </ul>
                <div className='change-window'>
                    <input id='titleInput' placeholder='Введите заголовок'></input>
                    <br></br>
                    <textarea id='textInput' placeholder='Введите текст' rows='3'></textarea>
                    <button>Сохранить!</button>
                </div>
            </div>
        )
    }
} 

export default Main;