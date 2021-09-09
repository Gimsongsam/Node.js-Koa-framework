import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import {Route, Link } from 'react-router-dom';
import './authInput.scss';
import * as api from '../lib/api';

const AuthLogin = ({
    username,
    password,
    input,
    login,
}) => {

    // const [alert, setAlert] = useState('');

    // //api 요청하기
    // const onSubmit = async () => {
    //     if(input.username.length === 0 || input.password.length === 0){
    //         setAlert('빈 칸을 모두 입력하세요.');
    //     }else{
    //         try{
    //             await axios.post('http://localhost:4000/api/auth/login',
    //             {   
    //                 // withCredentials: true,
    //                 username: input.username,
    //                 password: input.password
    //             })
    //         } catch(e){
    //             setAlert('아이디 혹은 비밀번호가 일치하지 않습니다.');
    //             console.log(e)
    //         }
    //     }
    // }

    
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

            <Link to="/register">회원가입</Link>
        </div>
    )
}

export default AuthLogin;