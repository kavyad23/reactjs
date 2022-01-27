import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './Login.css'
import { storeLoginDetails } from '../../container/actions'

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

function LoginComponent(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);

    const handleLogin = () => {
        if (username.value !== '' && password.value !== '') {
            setError(null);
            props.storeLoginDetails(username.value);
            props.history.push('/ticket-booking/movies');
        } else {
            setError('Please enter username and password');
        }
    }

    return (
        <React.Fragment>
            <div className='login-container'>
                <div className='login-title'>Login</div>
                <div className='user-name'>
                    Username <input type="text" {...username} />
                </div>
                <div className='pass-field'>
                    Password <input type="password" {...password} />
                </div>

                <div className='button-field'>
                    <input type="button" value='Login' className="button-10 marginTopZero" onClick={handleLogin} />
                </div>

                {error && <div className='error-field'><p style={{ color: 'red' }}>{error}</p></div>}

            </div>
        </React.Fragment>
    );
}


const mapStateToProps = (state) => {
    const { movieReducer } = state;
    return {
        selectedMovie: movieReducer.selectedMovie,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeLoginDetails: (data) => dispatch(storeLoginDetails(data)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent))
