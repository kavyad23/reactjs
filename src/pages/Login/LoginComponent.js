import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'

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
            props.history.push('/ticket-booking/movies');
        } else {
            setError('Please enter username and password');
        }
    }

    return (
        <div>
            Login<br /><br />
            <div>
                Username <input type="text" {...username} />
            </div>
            <div style={{ marginTop: 10 }}>
                Password <input type="password" {...password} />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />

            <input type="button" value='Login' onClick={handleLogin} /><br />
        </div>
    );
}



export default withRouter(LoginComponent);

