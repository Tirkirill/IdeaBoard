import React from "react";

class EnterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class='center-container'>
                <div class='form-container'>
                    <span class='form-title'>Вход</span>
                    <form>
                        <input type='email' placeholder='Введите email' class='email'></input>
                        <input placeholder='Введите пароль' class='password'></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default EnterForm;