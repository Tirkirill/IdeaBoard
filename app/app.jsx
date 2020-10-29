import React from "react";
import EnterForm from "./components/EnterForms/EnterForm.jsx";
import LoginForm from "./components/EnterForms/LoginForm.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <LoginForm/>
        )
    }
}

export default App;