import EnterForm from "./EnterForm.jsx";
import * as API from "../../backend/API";

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
        let emailInput = document.getElementsByClassName('email')[0];
        let passwordInput = document.getElementsByClassName('password')[0];
        let error = document.getElementsByClassName('error')[0];
  
        if (!(emailInput.validity.valid && passwordInput.validity.valid)) {
            
            error.innerHTML = 'Ошибка ввода!';
            return;
        }

        let email = emailInput.value;
        
        API.fetchUsersByEmail(email).then((res)=>
        res.json()).then((res)=> {
            if (res.length>0) {
                error.innerHTML = 'Такой пользователь уже существует';
            }
            else {
                console.log('Создаем!')
                API.createNewUser({email:email, password:passwordInput.value}).then(()=>console.log('Вышло!'))
            }
        }

        );
    }
}

export default RegistrationForm;