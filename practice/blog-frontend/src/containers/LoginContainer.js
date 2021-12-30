import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { changeField, initialize, createlogin} from '../modules/auth';
import {checkUser} from '../modules/user';
import AuthForm from '../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';

const LoginContainer = () => {
    const dispatch = useDispatch();
    const {form, text, error, user, auth} = useSelector(({auth, user}) => ({
        form: auth.login,
        text: '로그인',
        error: auth.authError,
        auth: auth.auth,
        // userState: user.userState,
        user: user.user
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
        // console.log('test');
        // dispatch(checkuser(true));
        // dispatch(checkUser());
        // console.log('로그인');
    }

    useEffect(() => {
        if(auth){
            console.log('로그인 성공: ', auth);
            dispatch(checkUser())

            history.push(`/@:${user}`);
            try{
                localStorage.setItem('user', JSON.stringify(user));
                console.log(JSON.stringify(user));
            }catch(e){
                console.log('localStorage is no working');
            }
            
        }
    },[auth, history, dispatch, username, user])

    // useEffect(() => {
    //     // console.log(user);
    //     if(user){
    //         // console.log(user);
    //         history.push(`/@:${user}`);
    //         try{
    //             localStorage.setItem('user', JSON.stringify(user));
    //             console.log(JSON.stringify(user));
    //         }catch(e){
    //             console.log('localStorage is no working');
    //         }
    //     }
    // },[user, dispatch, history])

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