import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AuthInput = styled.div`

    p{
        font-size: 22px;
        font-weight: bold;
        padding-bottom: 10px;

        color: #333;
    }

    .auth_input{
        width: 100%;

        input{
            width: 100%;
            height: 30px;

            display: block;
            border: none;
            border-bottom: 1px solid #828282;

            font-size: 18px;
            color: #333;
            margin-bottom: 20px;
        }
        input::placeholder{
            color: #828282;
        }
    }

    .alert_text{
        font-size: 16px;
        font-weight: 500;
        color: #c92914;
        text-align: center;
        padding-bottom: 20px;
    }

    .auth_btn{
        display: block;
        width: 100%;
        height: 50px;

        border: none;
        border-radius: 5px;

        background: #87b6c9;

        color: #fff;
        font-weight: bold;
        font-size: 18px;

        margin-bottom: 60px;
        cursor: pointer;
    }
    .auth_btn:hover{
        background: #6ea3ba;
    }

    .auth_link{
        text-underline-position: under;
        text-decoration: underline;

        position: absolute;
        right: 30px; bottom: 30px;

        color: #828282;
        text-align: right;
    }
`;

const AuthForm = ({type, text, form, onChange}) => {

    // const [test, setTset] = useState('')

    // const onChange = (e) => {
    //     const {value, name} = e.target;
    //     console.log(e.target.value);
    //     // setTset(value)
    // }

    
    return(
        <AuthInput>
            {/* {console.log(form.username)} */}
            {/* {console.log(onChange)} */}
            <p>{text}</p>
            <form className="auth_input">
                <input
                    type="text"
                    placeholder="아이디" 
                    onChange={onChange}
                    value={form.username}
                    name="username"
                />
                <input 
                    type="password" 
                    placeholder="비밀번호" 
                    onChange={onChange}
                    value={form.password}
                    name="password"
                />

                {type === 'register' &&
                    <input type="password" placeholder="비밀번호 확인" />
                }

                <p className="alert_text">
                        {/* {alert} */}
                </p>

            </form>
            <button
                className="auth_btn" type="submit"
                // onClick={() => login(input)}
            >{text}</button>

            {type === 'register' &&
                <Link className="auth_link" to="/login">로그인</Link>
            }
            {type === 'login' &&
                <Link className="auth_link" to="/register">회원가입</Link>
            }
            
        </AuthInput>
    );
};

export default AuthForm;