import EnterForm from "./EnterForm.jsx";

class RegistrationForm extends EnterForm {
    constructor(props) {
        super(props);
        this.title = 'Регистрация';
        this.buttonValue = 'Зарегистрироваться';
        this.refTitle = 'Вход';
        this.refNote = 'У вас уже есть аккаунт? ';
        this.ref='/login';
    }

    SubmitHandler(evt) {
        super.SubmitHandler(evt);
    }
}

export default RegistrationForm;