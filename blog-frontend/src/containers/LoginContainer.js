import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { changeField, initialize, createlogin } from '../modules/auth';
import AuthForm from '../components/auth/AuthForm';
// import { useHistory } from 'react-router';

const LoginForm = () => {
    const dispatch = useDispatch();
    const {form, text} = useSelector(({auth}) => ({
        form: auth.login,
        text: '로그인'
    }));

    useEffect(() => {
        dispatch(initialize());
    }, [dispatch])

    const onChange = e => {
        const {value, name} = e.target;
        console.log(name, value);
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    }

    // const history = useHistory();
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        dispatch(createlogin(form));
        // 로그읜 성공하면
        // history.push('/');
        // 로그인 실패하면 안넘어가게!?
        //useHistory 사용
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