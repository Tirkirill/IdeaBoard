import React from "react";

let posts = [
    {
        title: "Привет!",
        text: "ВОТО-Че придумал",
        id:"1"
    },
    {
        title: "Приветули!",
        text: "Ниче не придумал...",
        id:"2"
    }
]

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.user) return null;
        return(
            <div>
                <div className='navbar'>
                    <div className='addButton'></div>
                    <span className='useremail'>{this.props.user.email}</span>
                </div>
                <ul className='ideaList'>
                    {posts.map((post)=> 
                    <li draggable className='idea' key={post.id}>
                        <div className='idea-title'>{post.title.length>10? post.title.slice(0, 10)+"...":post.title}</div>
                    </li>)}
                </ul>
            </div>
        )
    }
} 

export default Main;