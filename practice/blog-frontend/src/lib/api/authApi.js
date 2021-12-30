import axios from 'axios';

export const requestLogin = (payload) => 
    // console.log('payload: ', payload)
    axios.post('http://localhost:4000/api/auth/login',
            {   
                // withCredentials: true,
                username: payload.username,
                password: payload.password
            }
        );
export const requestRegister = (payload) =>
    axios.post('http://localhost:4000/api/auth/register',
            {   
                // withCredentials: true,
                username: payload.username,
                password: payload.password
            }
        );
export const checkUser = (payload) => 
axios.get(`http://localhost:4000/api/auth/check`,{
    user: payload.username 
});

export const requestLogout = () =>
axios.post(`http://localhost:4000/api/auth`)