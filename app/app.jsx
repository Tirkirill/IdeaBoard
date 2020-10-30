import React from "react";
import LoginForm from "./components/EnterForms/LoginForm.jsx";
import RegistrationForm from "./components/EnterForms/RegistrationForm.jsx";
import {BrowserRouter as Router, Redirect, NavLink, Switch, Route} from "react-router-dom";
import Main from "./components/Main/Main.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: null};
        this.logInto = this.logInto.bind(this);
    }

    logInto(user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.setState({user: user});
    }

    componentWillMount() {
        let user = JSON.parse(sessionStorage.getItem('user', user));
        if (user) this.setState({user:user});
    }

    render() {
        console.log(this.state.user);
        return(
            <Router>
                {!this.state.user && <Redirect to='/login'/>}
                <Switch>
                    <Route exact path="/registration">
                        <RegistrationForm logInto={this.logInto}/>
                    </Route>
                    <Route exact path="/login">
                        <LoginForm logInto={this.logInto}/>
                    </Route>
                    <Route exact path="/">
                        <Main user={this.state.user}/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;