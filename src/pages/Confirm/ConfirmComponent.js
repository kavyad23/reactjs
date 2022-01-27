import React from 'react';
import { withRouter } from 'react-router-dom'
import '../Login/Login.css';

function ConfirmComponent(props) {

    return (
        <React.Fragment>
            <div className='confirm-container'>
                Ticket Booked successfully
            </div>
        </React.Fragment>
    );
}



export default withRouter(ConfirmComponent);

