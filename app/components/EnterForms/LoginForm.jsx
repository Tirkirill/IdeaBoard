import EnterForm from "./EnterForm.jsx";

class LoginForm extends EnterForm {
    constructor(props) {
        super(props);
        this.title = 'Вход';
        this.buttonValue = 'Войти';
        this.refTitle = 'Регистрация';
        this.refNote = 'У вас еще нет аккаунта? ';
    }

    SubmitHandler(evt) {
        super.SubmitHandler(evt);
    }
}

export default LoginForm;