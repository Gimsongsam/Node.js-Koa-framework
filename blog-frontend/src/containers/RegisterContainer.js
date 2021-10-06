import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { changeField, initialize, createregister } from '../modules/auth';
import AuthForm from '../components/auth/AuthForm';
// import { useHistory } from 'react-router';

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
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    }

    // const history = useHistory();
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        dispatch(createregister(form));

        //useHistory 사용
        // history.push('/');
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