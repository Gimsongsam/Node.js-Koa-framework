import React from 'react';
// import styled from 'styled-components';
import {Route} from 'react-router-dom';
import AuthRegister from './auth_register';
import AuthLogin from './auth_login';
import './auth.scss';

const Auth = ({username, password, input}) => {
    return (
        <div className="auth_style">
            <h3>REACTERS</h3>
            <Route path="/register">
                <AuthRegister />
            </Route>
            <Route path="/login">
                <AuthLogin  
                    username={username}
                    password={password}
                    input={input}
                />
            </Route>
        </div>
    );
}

export default Auth;