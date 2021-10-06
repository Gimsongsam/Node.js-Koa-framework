import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/button';

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

    /* .auth_link{
        text-underline-position: under;
        text-decoration: underline;

        position: absolute;
        right: 30px; bottom: 30px;

        color: #828282;
        text-align: right;
    } */
`;

const AuthLink = styled.div`
    text-align: right;
    padding-top: 25px;

    a{
        text-underline-position: under;
        text-decoration: underline;
        color: #828282;
    }
    
`;

const AuthForm = ({type, text, form, onChange, onSubmit}) => {
    
    return(
        <AuthInput>
            {/* {console.log(form.username)} */}
            <p>{text}</p>
            <form className="auth_input" onSubmit={onSubmit}>
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
                    <input 
                        type="password"
                        placeholder="비밀번호 확인"
                        onChange={onChange}
                        value={form.password_confirm}
                        name="password_confirm"
                    />
                }

                <p className="alert_text">
                        {/* {alert} */}
                </p>

                <Button
                    className="auth_btn" type="submit"
                    // onClick={() => login(input)}
                >{text}</Button>

            </form>
            
            <AuthLink>
                {type === 'register' ? 
                    (<Link className="auth_link" to="/login">로그인</Link>) : 
                    (<Link className="auth_link" to="/register">회원가입</Link>)
                }
            </AuthLink>
            
        </AuthInput>
    );
};

export default AuthForm;