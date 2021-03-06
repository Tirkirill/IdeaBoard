import React from "react";
import {NavLink, Redirect} from "react-router-dom";

class EnterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {done:false}
        this.SubmitHandler = this.SubmitHandler.bind(this);
    }

    SubmitHandler(evt) {
        evt.preventDefault();
    }

    render() {
        if (this.state.done) {
            return(
                <Redirect to="/"/>
            )
        }

        return(
            <div className='center-container'>
                <div className='form-container'>
                    <span className='form-title'>{this.title}</span>
                    <form>
                        <input type='email' placeholder='Введите email' className='email'></input>
                        <input pattern='[A-Za-z-0-9]{6,}' placeholder='Введите пароль' className='password'></input>
                        <span className='remark'>*Длина пароля должна быть больше 6 и он не должен содержать специальных символов</span>
                        <input onClick={this.SubmitHandler} type='submit' value={this.buttonValue}></input>
                        <div className='error'></div>
                        <span>{this.refNote}<NavLink className='ref' to={this.ref}>{this.refTitle}</NavLink></span>
                    </form>
                </div>
            </div>
        )
    }
}

export default EnterForm;