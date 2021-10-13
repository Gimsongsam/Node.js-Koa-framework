import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import PostForm from '../components/post/PostForm';
import { initialize } from '../modules/auth';

const PostListContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initialize())
    }, [dispatch])

    return(
        <PostForm />
    )
}

export default PostListContainer;