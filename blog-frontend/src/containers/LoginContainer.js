import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { changeField, initialize, createlogin, checkuser,} from '../modules/auth';
import {check} from '../modules/user';
import AuthForm from '../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';

const LoginContainer = () => {
    const dispatch = useDispatch();
    const {form, text, error, auth, userState, userId} = useSelector(({auth, user}) => ({
        form: auth.login,
        text: '로그인',
        error: auth.authError,
        auth: auth.auth,
        userState: user.userState,
        userId: user.userId
    }));

    useEffect(() => {
        dispatch(initialize());
    },[dispatch]);

    
    const onChange = e => {
        const {value, name} = e.target;
        // console.log(name, value);
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    }

    const [errorMessage, setErrorMessage] = useState('');
    const {username, password} = form;
    
    const history = useHistory();
    
    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(e);
        dispatch(createlogin(form));

        if(username.length === 0 || password.length === 0){
            setErrorMessage('빈칸을 모두 입력해주세요');
            return
        }else if(error === 401){
            setErrorMessage('아이디 혹은 비밀번호가 일치하지 않습니다.');
            return
        }
        console.log('test');
        // dispatch(checkuser(true));
        dispatch(check(username, true));
        console.log('로그인');
    }

    // useEffect(() => {
    //     if(auth){
    //         console.log('로그인 성공: ', auth);
    //         dispatch(check(username, true))
    //     }
    // },[auth, history, dispatch, username])

    useEffect(() => {
        if(userState){
            console.log(userState);
            history.push(`/@:${userId}`);
            try{
                localStorage.setItem('user', JSON.stringify(userId));
                // console.log(JSON.stringify(userId));
            }catch(e){
                console.log('localStorage is no working');
            }
        }
    },[userId, dispatch, userState, history])

    return (
        <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            text={text}
            errorMessage={errorMessage}
    />
    )
}

export default withRouter(LoginContainer);