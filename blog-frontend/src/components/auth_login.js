import React from 'react';
import {Route, Link } from 'react-router-dom';

const AuthLogin = () => {
    return(
        <div>
            <p>로그인</p>
            <div class="auth_input">
                <input type="text" placeholder="아이디" />
                <input type="password" placeholder="비밀번호" />
            </div>

            <input class="auth_btn" type="button" value="로그인" />

            <Link to="/register">회원가입</Link>
        </div>
    )
}

export default AuthLogin;