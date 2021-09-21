import React from 'react';
import {connect} from 'react-redux';
import {username, password, register, password_confirm} from '../modules/auth';
import AuthRegister from '../components/auth/auth_register';

const LoginContainer = ({
    input,
    username,
    password,
    password_confirm,
    register,
}) => {
    return (
        <AuthRegister
            username={username}
            password={password}
            passwordConfirm={password_confirm}
            input={input}
            register={register}
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
        register,
        password_confirm,
    }
)(LoginContainer)