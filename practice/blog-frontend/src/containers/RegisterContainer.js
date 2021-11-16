import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { changeField, initialize, createregister } from '../modules/auth';
import AuthForm from '../components/auth/AuthForm';
import { useHistory } from 'react-router';

const RegisterContainer = () => {
    const dispatch = useDispatch();
    const {form, text, error, auth} = useSelector(({auth}) => ({
        form: auth.register,
        text: '회원가입',
        error: auth.authError,
        auth: auth.auth,
    }));

    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    const onChange = e => {
        const {value, name} = e.target;
        console.log(name, value)
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    }

    const [errorMessage, setErrorMessage] = useState('');
    const {username, password, password_confirm} = form;


    const history = useHistory();
    const onSubmit = (e) => {
        e.preventDefault();

        if(password !== password_confirm){
            setErrorMessage('비밀번호가 일치하지 않습니다.');
            dispatch(changeField({form: 'register', key: 'password', value: ''}))
            dispatch(changeField({form: 'register', key: 'password_confirm', value: ''}))
            return
        }

        dispatch(createregister(form));
        

        if(username.length === 0 || password.length === 0){
            setErrorMessage('빈칸을 모두 입력해주세요');
            return
        }else if(error === 409){
            setErrorMessage('이미 존재하는 계정명입니다.');
            changeField({error: null});
            return
        }else if(error === 400){
            setErrorMessage('회원가입 실패');
            dispatch(changeField({form: 'register', key: 'password', value: ''}));
            return
        }
    }

    useEffect(() => {
        if(auth){
            console.log(auth);
            history.push(`/`);
        }
    })

    return (
        <AuthForm
        type="register"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        text={text}
        errorMessage={errorMessage}
    />
    )
}

export default RegisterContainer;