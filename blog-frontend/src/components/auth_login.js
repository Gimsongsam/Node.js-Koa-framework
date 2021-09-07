import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import {Route, Link } from 'react-router-dom';
import * as api from '../lib/api';

const AuthLogin = ({
    setInput,
    username,
    password,
    input
}) => {


    // 입력값 데이터 설정하기
    // const [input, setInput] = useState({
    //     username: "",
    //     password: ""
    // })

    // const onChange_id = useCallback(
    //     e => {
    //         setInput({
    //             ...input,
    //             username: e.target.value
    //         })        
    //     },
    //     [input],
    // )

    // const onChange_password = useCallback(
    //     e => {
    //         setInput({
    //             ...input,
    //             password: e.target.value
    //         })        
    //     },
    //     [input],
    // )
    
    // console.log(input)

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

    return(
        <div>
            <p>로그인</p>
            <form className="auth_input">
                <input type="text" value={input} onChange={onChange_username} placeholder="아이디" />
                <input type="password" onChange={onChange_password} placeholder="비밀번호" />
                <p className="alert_text">
                    {/* {alert} */}
                </p>
            </form>

            <button
                className="auth_btn" type="submit"
                // onClick={onSubmit}
            >로그인</button>

            <Link to="/register">회원가입</Link>
        </div>
    )
}

export default AuthLogin;