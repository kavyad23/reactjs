import React from "react";

class ChildComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div>Child</div>
            </React.Fragment>
        )
    }

}

export default ChildComponent;