import React from "react";
import { HeaderDiv } from '../../container/styled';
import './HeaderComponent.css'

class HeaderComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeaderDiv>
                    <h1 className="header-title">Movie Ticketing</h1>
                </HeaderDiv>
            </React.Fragment>
        )
    }

}

export default HeaderComponent;