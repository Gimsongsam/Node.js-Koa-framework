import React from 'react';
import {Route, Link } from 'react-router-dom';

const AuthRegister = () => {
    return(
        <div>
            <p>회원가입</p>
            <div class="auth_input">
                <input type="text" placeholder="아이디" />
                <input type="password" placeholder="비밀번호" />
                <input type="password" placeholder="비밀번호 확인" />
            </div>

            <input class="auth_btn" type="button" value="회원가입" />

            <Link to="/login">로그인</Link>
        </div>
    )
}

export default AuthRegister;