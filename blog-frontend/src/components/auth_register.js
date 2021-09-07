import axios from 'axios';
import React, {useState, useCallback, useEffect} from 'react';
import {Route, Link } from 'react-router-dom';

const AuthRegister = () => {
    
    // 입력값 데이터 설정하기
    const [input, setInput] = useState({
        username: '',
        password: '',
        password_confirm: ''
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

    const onChange_password_confirm = useCallback(
        e => {
            setInput({
                ...input,
                password_confirm: e.target.value
            })        
        },
        [input],
    )
    
    console.log(input)


    
    const [alert, setAlert] = useState('');

    //api 요청하기
    const onSubmit = async () => {
        // 입력값에 따른 alert 텍스트 설정하기
        if(input.password !== input.password_confirm){
            setAlert('비밀번호가 일치하지 않습니다.');
        }else if(input.username.length === 0 || input.password.length === 0 || input.password_confirm.length === 0){
            setAlert('빈 칸을 모두 입력하세요.');
        }else{
            try{
                await axios.post('http://localhost:4000/api/auth/register',
                {   
                    withCredentials: true,
                    username: input.username,
                    password: input.password
                })
            } catch(e){
                setAlert('이미 존재하는 계정입니다.');
                console.log(e)
            }
        }
    }


        // onSubmit();
    
    // console.log(input.username.length)

    return(
        <div>
            <p>회원가입</p>
            <form className="auth_input">
                <input type="text" placeholder="아이디" onChange={onChange_id} />
                <input type="password" placeholder="비밀번호" onChange={onChange_password} />
                <input type="password" placeholder="비밀번호 확인" onChange={onChange_password_confirm}/>
                <p className="alert_text">
                    {alert}
                </p>
            </form>

            <button
                className="auth_btn" type="submit"
                onClick={onSubmit}
            >회원가입</button>

            <Link to="/login">로그인</Link>
        </div>
    )
}

export default AuthRegister;