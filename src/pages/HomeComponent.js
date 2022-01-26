import React from "react";
import { Link, Outlet } from "react-router-dom";

class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    goToChildComponent = () => {
        this.props.history.push('/child');
    }

    render() {

        return (
            <React.Fragment>
                <div>Test</div>
                <button onClick={this.goToChildComponent}>Child Component</button>
            </React.Fragment>
        )
    }

}

export default HomeComponent;