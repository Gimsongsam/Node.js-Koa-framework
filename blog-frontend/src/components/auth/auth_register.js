import axios from 'axios';
import React, {useState, useCallback, useEffect} from 'react';
import {Route, Link } from 'react-router-dom';

const AuthRegister = ({
    username,
    password,
    register,
    passwordConfirm,
    input
}) => {
    
    const onChange_username = e => console.log(username(e.target.value));
    const onChange_password = e => console.log(password(e.target.value));
    const onChange_password_confirm = e => console.log(passwordConfirm(e.target.value));

    console.log(input);

    return(
        <div>
            <p>회원가입</p>
            <form className="auth_input">
                <input type="text" placeholder="아이디" onChange={onChange_username} />
                <input type="password" placeholder="비밀번호" onChange={onChange_password} />
                <input type="password" placeholder="비밀번호 확인" onChange={onChange_password_confirm}/>
                <p className="alert_text"></p>
            </form>

            <button
                className="auth_btn" type="submit"
                onClick={() => register(input)}
            >회원가입</button>

            <Link className="auth_link" to="/login">로그인</Link>
        </div>
    )
}

export default AuthRegister;