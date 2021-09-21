import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import {Route, Link } from 'react-router-dom';
import './authInput.scss';
// import * as api from '../lib/api';

const AuthLogin = ({
    username,
    password,
    input,
    login,
}) => {

    
    const onChange_username = e => console.log(username(e.target.value))
    const onChange_password = e => console.log(password(e.target.value))

    console.log(input);
    console.log(login);

    return(
        <div>
            <p>로그인</p>
            <form className="auth_input">
                <input type="text" onChange={onChange_username} placeholder="아이디" />
                <input type="password" onChange={onChange_password} placeholder="비밀번호" />
                <p className="alert_text">
                    {/* {alert} */}
                </p>
            </form>

            <button
                className="auth_btn" type="submit"
                onClick={() => login(input)}
            >로그인</button>

            <Link className="auth_link" to="/register">회원가입</Link>
        </div>
    )
}

export default AuthLogin;