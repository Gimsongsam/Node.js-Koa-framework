import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginContainer from '../containers/LoginContainer';

const LoginPage = () => {
    const text = '로그인';

    return(
        <div>
            <AuthTemplate>
                <LoginContainer text={text} />
            </ AuthTemplate>
        </div>
    );
};

export default LoginPage