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
        this.stopDrag = this.stopDrag.bind(this);
        this.addIdea = this.addIdea.bind(this);
    }

    logInto(user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.setState({user: user});
    }

    componentWillMount() {
        if (!this.state.user) {
            let user = JSON.parse(sessionStorage.getItem('user', user));
            if (user) this.setState({user:user});
        }
    }

    stopDrag(event, ui) {
        let newIdeas = this.state.user.ideas.slice();        
        let id = event.target.id;
        newIdeas[id].X = ui.position.left;
        newIdeas[id].Y = ui.position.top;
        this.setState({user: {...this.state.user, ideas: newIdeas}})
    }

    addIdea() {
        
        this.setState({
            user: {...this.state.user, ideas: this.state.user.ideas.concat({title: 'new', id: new Date().getTime()})}
       })
    }

    render() {
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
                        <Main user={this.state.user} stopDrag={this.stopDrag} addIdea={this.addIdea}/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;