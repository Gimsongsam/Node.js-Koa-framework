import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import {Route, Link } from 'react-router-dom';
import * as api from '../lib/api';

const AuthLogin = () => {


    // 입력값 데이터 설정하기
    const [input, setInput] = useState({
        username: "",
        password: ""
    })

    const onChange_id = useCallback(
        e => {
            setInput({
                ...input,
                username: e.target.value
            })        
        },
        [input],
    )

    const onChange_password = useCallback(
        e => {
            setInput({
                ...input,
                password: e.target.value
            })        
        },
        [input],
    )
    
    console.log(input)

    const [alert, setAlert] = useState('');

    //api 요청하기
    const onSubmit = async () => {
        if(input.username.length === 0 || input.password.length === 0){
            setAlert('빈 칸을 모두 입력하세요.');
        }else{
            try{
                await axios.post('http://localhost:4000/api/auth/login',
                {   
                    // withCredentials: true,
                    username: input.username,
                    password: input.password
                })
            } catch(e){
                setAlert('아이디 혹은 비밀번호가 일치하지 않습니다.');
                console.log(e)
            }
        }
    }
    
    

    // 데이터 전송
    // const onSubmit = e => {
    //     e.preventDefault();
    //     onSubmitData(input)
    // }


    return(
        <div>
            <p>로그인</p>
            <form className="auth_input">
                <input type="text" placeholder="아이디" onChange={onChange_id} />
                <input type="password" placeholder="비밀번호" onChange={onChange_password} />
                <p className="alert_text">
                    {alert}
                </p>
            </form>

            <button
                className="auth_btn" type="submit"
                onClick={onSubmit}
            >로그인</button>

            <Link to="/register">회원가입</Link>
        </div>
    )
}

export default AuthLogin;