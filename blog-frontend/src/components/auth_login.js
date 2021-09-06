import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import {Route, Link } from 'react-router-dom';
import * as api from '../lib/api';

const AuthLogin = () => {


    // 입력값 데이터 설정하기
    const [input, setInput] = useState({
        username: null,
        password: null
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


    //api 요청하기
    const onSubmit = async () => {
        try{
            await axios.post('http://localhost:4000/api/auth/login',
            {
                withCredentials: true,
                username: input.username,
                password: input.password
            })
        } catch(e){
            console.log(e)
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
            <form className="auth_input" onSubmit={onSubmit}>
                <input type="text" placeholder="아이디" onChange={onChange_id} />
                <input type="password" placeholder="비밀번호" onChange={onChange_password} />
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