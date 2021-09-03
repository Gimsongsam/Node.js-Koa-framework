import React from 'react';
// import styled from 'styled-components';
import {Route} from 'react-router-dom';
import AuthRegister from './auth_register';
import AuthLogin from './auth_login';
import './auth.scss';

const Auth = () => {
    return (
        <div class="auth_style">
            <h3>REACTERS</h3>
            {/* <AuthRegister /> */}
            <Route path="/register" component={AuthRegister}/>
            <Route path="/login" component={AuthLogin}/>
        </div>
    )
}

export default Auth;