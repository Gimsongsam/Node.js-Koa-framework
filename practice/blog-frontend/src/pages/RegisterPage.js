import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterContainer from '../containers/RegisterContainer';

const RegisterPage = () => {

    return(
        <div>
            <AuthTemplate>
                <RegisterContainer/>
            </ AuthTemplate>
        </div>
    );
};

export default RegisterPage;