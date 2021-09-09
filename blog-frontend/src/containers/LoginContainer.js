import React from 'react';
import {connect} from 'react-redux';
import {username, password, login} from '../modules/auth';
import AuthLogin from '../components/auth_login';

const LoginContainer = ({
    input,
    username,
    password,
    login,
}) => {
    return (
        <AuthLogin
            username={username}
            password={password}
            input={input}
            login={login}
        />
    );
};

export default connect(
    ({auth}) => ({
        input: auth.input
    }),
    {
        username,
        password,
        login,
    }
)(LoginContainer)