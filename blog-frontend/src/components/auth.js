import React from 'react';
// import styled from 'styled-components';
import {Route} from 'react-router-dom';
// import AuthRegister from './auth_register';
import LoginContainer from '../containers/LoginContainer';
import './auth.scss';
import RegisterContainer from '../containers/RegisterContainer';

const Auth = () => {
    return (
        <div className="auth_style">
            <h3>REACTERS</h3>
            <Route path="/register">
                <RegisterContainer />
            </Route>
            <Route path="/login">
                <LoginContainer />
            </Route>
        </div>
    );
}

export default Auth;