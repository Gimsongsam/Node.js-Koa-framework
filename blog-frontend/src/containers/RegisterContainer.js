import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { changeField, initialize, createRegister } from '../modules/auth';
import AuthForm from '../components/auth/AuthForm';
// import { requestLogin } from '../lib/api';
// import requestSaga from '../lib/requestSaga';

const LoginForm = () => {
    const dispatch = useDispatch();
    const {form, text} = useSelector(({auth}) => ({
        form: auth.register,
        text: '회원가입'
    }));

    useEffect(() => {
        dispatch(initialize());
    }, [dispatch])

    const onChange = e => {
        const {value, name} = e.target;
        console.log(name, value)
        // console.log(e.target)
        // console.log(form.username)
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    }

    // console.log(form);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        dispatch(createRegister(form));
    }

    return (
        <AuthForm
        type="register"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        text={text}
    />
    )
    
}

export default LoginForm;