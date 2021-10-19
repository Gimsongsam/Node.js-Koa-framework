import axios from 'axios';
// 구조가 이상해
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
export const requestPost = (payload) => 
    axios.post('http://localhost:4000/api/posts',
        {
            title: payload.title,
            body: payload.body,
            tags: payload.tags
        }
    )

export const getPost = (payload) => {
    const {username} = payload;
    console.log(username)
    axios.get(`http://localhost:4000/api/posts?username=${username}&tag=&page=`)}
