import React from "react";


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.user) return null;
        return(
            <div>{this.props.user.email}</div>
        )
    }
} 

export default Main;