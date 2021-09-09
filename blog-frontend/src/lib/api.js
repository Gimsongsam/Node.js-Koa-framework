import axios from 'axios';

export const login = (input) => axios.post('http://localhost:4000/api/auth/login',
            {   
                // withCredentials: true,
                username: input.username,
                password: input.password
            });
export const register = (input) => axios.post('http://localhost:4000/api/auth/register',
            {   
                // withCredentials: true,
                username: input.username,
                password: input.password
            });

// export const login = () => axios.post(`${url}/api/auth/login`);


