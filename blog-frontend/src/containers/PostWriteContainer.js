import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WritePost from '../components/post/WritePost';
import { changeField, createPostSaga } from '../modules/post'

const PostWriteContainer = () => {

    const dispatch = useDispatch();
    const {form} = useSelector(({post}) => ({
        form: post
    })) 

    const onChange = (e) => {
        dispatch(changeField(e.target));
    }

    const onSubmit = (e) => {
        dispatch(createPostSaga(form));

        e.preventDefault();
    }
    

    return(
        <WritePost
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}

export default PostWriteContainer;