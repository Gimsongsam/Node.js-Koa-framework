import React, {useEffect} from 'react';
import PostView from '../components/post/PostView';
import { useDispatch, useSelector } from 'react-redux';
// import post from '../modules/post';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { createPostRead } from '../modules/post';

const PostViewContainer = ({match}) => {
    let postId = match.params.postId;
    postId = postId.replace(':', "");

    const {postContent} = useSelector(({post}) => ({
        postContent: post.postContent
    }))

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(createPostRead(postId))
    },[dispatch, postId]);

    return (
        <PostView content={postContent} />
    )
};

export default withRouter(PostViewContainer);