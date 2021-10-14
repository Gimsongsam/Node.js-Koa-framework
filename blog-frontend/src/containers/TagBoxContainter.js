import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TagBox from '../components/common/tagBox';
import { createInsert } from '../modules/post';

const TagBoxContainer = () => {
    const dispatch = useDispatch();
    const {tags} = useSelector(({post}) => ({
        tags: post.tags
    }))

const onInsert = (tag) => {
    dispatch(createInsert(tag))
}

    

    return(
        <TagBox 
            tags={tags}
            onInsertTag={onInsert}
        />
    )
}

export default TagBoxContainer