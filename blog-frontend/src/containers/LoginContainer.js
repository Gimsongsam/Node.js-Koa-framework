import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { changeField } from '../modules/auth';
import AuthForm from '../components/auth/AuthForm';


const LoginForm = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form: auth.login
    }));
    // console.log(form)

    const onChange = e => {
        const {value, name} = e.target;
        console.log(name, value)
        // console.log(e.target)
        // form.username = value
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
    />
    )
    
}

export default LoginForm;