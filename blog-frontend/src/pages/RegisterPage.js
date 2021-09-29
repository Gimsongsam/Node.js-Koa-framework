import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const RegisterPage = () => {
    const text = '회원가입';

    return(
        <div>
            <AuthTemplate>
                <AuthForm text={text} />
            </ AuthTemplate>
        </div>
    );
};

export default RegisterPage;