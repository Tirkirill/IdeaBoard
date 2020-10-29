import EnterForm from "./EnterForm.jsx";
import * as API from "../../backend/API";

class LoginForm extends EnterForm {
    constructor(props) {
        super(props);
        this.title = 'Вход';
        this.buttonValue = 'Войти';
        this.refTitle = 'Регистрация';
        this.refNote = 'У вас еще нет аккаунта? ';
        this.ref='/registration';
    }

    SubmitHandler(evt) {
        super.SubmitHandler(evt);
        let emailInput = document.getElementsByClassName('email')[0];
        let passwordInput = document.getElementsByClassName('password')[0];
        let error = document.getElementsByClassName('error')[0];
        if (!(emailInput.validity.valid && passwordInput.validity.valid)) {
            error.innerHTML = 'Ошибка ввода!';
            return;
        }

        API.fetchUsersByEmail(emailInput.value).then((res)=>
        res.json()).then((res)=> {
            if (res.length==0) {
                error.innerHTML = 'Такого пользователя не существует';
            }
            else {
                error.innerHTML = '';
                if (res[0].password == passwordInput.value) {
                    this.setState({done:true});
                    this.props.logInto(res[0]);
                    return;
                }
                error.innerHTML = 'Вы ввели неверный пароль';
            }
        }

        );
    }
}

export default LoginForm;