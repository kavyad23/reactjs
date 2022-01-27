import React from "react";
import { connect } from "react-redux"
import { HeaderDiv } from '../../container/styled';
import './HeaderComponent.css'

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <HeaderDiv>
                    <h1 className="header-title" >Movie Ticketing</h1>
                    {this.props.userDetails && <h6 className="user-details">Welcome, {this.props.userDetails}</h6>}
                </HeaderDiv>
            </React.Fragment>
        )
    }

}



const mapStateToProps = (state) => {
    const { movieReducer } = state;
    return {
        userDetails: movieReducer.userDetails,
    }
}

export default connect(mapStateToProps, null)(HeaderComponent)