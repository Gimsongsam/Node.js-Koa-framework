import React from 'react';
import {connect} from 'react-redux';
import {setInput, username, password} from '../modules/auth';
import Auth from '../components/Auth';

const AuthContainer = ({
    input,
    setInput,
    username,
    password,
}) => {
    return (
        <Auth
            // setInput={setInput}
            username={username}
            password={password}
            input={input}
            // password={password}
        />
    );
};

export default connect(
    ({auth}) => ({
        username: auth.username,
        password: auth.password,
    }),
    {
        username,
        password
    }
)(AuthContainer)