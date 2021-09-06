import React from 'react';
// import styled from 'styled-components';
import {Route} from 'react-router-dom';
import AuthRegister from './auth_register';
import AuthLogin from './auth_login';
import './auth.scss';

const Auth = () => {
    return (
        <div className="auth_style">
            <h3>REACTERS</h3>
            {/* <AuthRegister /> */}
            <Route path="/register">
                <AuthRegister />
            </Route>
            <Route path="/login">
                <AuthLogin />
            </Route>
        </div>
    );
}

export default Auth;