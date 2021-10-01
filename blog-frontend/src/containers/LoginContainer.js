import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { changeField } from '../modules/auth';
import AuthForm from '../components/auth/AuthForm';


const LoginForm = () => {
    const dispatch = useDispatch();
    const {form, text} = useSelector(({auth}) => ({
        form: auth.login,
        text: '로그인'
    }));

    const onChange = e => {
        const {value, name} = e.target;
        console.log(name, value)
        // console.log(e.target)
        // console.log(form.username)
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    }

    const onSubmit = () => {
        // 구현예정
    }

    return (
        <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        text={text}
    />
    )
    
}

export default LoginForm;