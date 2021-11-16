import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from '../components/post/PostForm';
import { initialize } from '../modules/auth';
import {createPostListSaga} from '../modules/post';

const PostListContainer = () => {
    const dispatch = useDispatch();
    const {userId, tags, postList} = useSelector(({user, post}) => ({
        userId: user.userId,
        tags: post.tags,
        postList: post.postList
    }))

    useEffect(() => {
        // console.log('test');
        // console.log(userId, tags);
        dispatch(initialize());
        dispatch(createPostListSaga(userId, tags));
    }, [dispatch, userId, tags]);

    return(
        <PostForm
            userId={userId} 
            postList={postList}
        />
    )
}

export default PostListContainer;