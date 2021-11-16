import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginContainer from '../containers/LoginContainer';

const LoginPage = () => {
    return(
        <div>
            <AuthTemplate>
                <LoginContainer />
            </ AuthTemplate>
        </div>
    );
};

export default LoginPage