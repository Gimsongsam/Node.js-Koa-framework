import axios from 'axios';

export const requestLogin = (input) => axios.post('http://localhost:4000/api/auth/login',
            {   
                // withCredentials: true,
                username: input.username,
                password: input.password
            });
export const requestregister = (input) => axios.post('http://localhost:4000/api/auth/register',
            {   
                // withCredentials: true,
                username: input.username,
                password: input.password
            });

// export const login = () => axios.post(`${url}/api/auth/login`);


