import axios from 'axios';

export const requestPost = (payload) => {
    console.log(payload)
    return axios.post('http://localhost:4000/api/posts',
        {
            // user: payload.user,
            title: payload.title,
            body: payload.body,
            tags: payload.tags
        }
    )}

export const getPost = (payload) => {
    const {username} = payload;
    return axios.get(`http://localhost:4000/api/posts?username=${username}&tag=&page=`,
        {
            username: username,
        }    
    )}

export const getPostRead = (payload) => {
    console.log(payload);
    return axios.get(`http://localhost:4000/api/posts/${payload}`)
}