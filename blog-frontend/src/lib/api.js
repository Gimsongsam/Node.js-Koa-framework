import axios from 'axios';

export const login = (input) => axios.post('http://localhost:4000/api/auth/login',
            {   
                // withCredentials: true,
                username: input.username,
                password: input.password
            });
export const register = () => axios.post(`http://localhost:4000/api/auth/register`);

// export const login = () => axios.post(`${url}/api/auth/login`);


