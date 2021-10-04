import React from 'react';
import styled from 'styled-components'
import Responsive from '../common/responsive';
import PostList from './PostContent';
import Header from '../common/header';

const Wrapper = styled(Responsive)`
    padding-top: 100px;
`;



const PostView = () => {
    return (
        <>
            <Header />
            <Wrapper>   
                <PostList />
            </Wrapper>
        </>
        
        
    )
}

export default PostView