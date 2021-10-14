import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WritePost from '../components/post/WritePost';
import { changeField } from '../modules/post'

const PostWriteContainer = () => {

    const dispatch = useDispatch();
    // const {form} = useSelector(({post}) => {

    // }) 

    const onChange = (e) => {
        dispatch(changeField(e.target));
    }
    

    return(
        <WritePost
            onChange={onChange}
        />
    )
}

export default PostWriteContainer;