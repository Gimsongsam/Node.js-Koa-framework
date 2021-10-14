import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/responsive';
import Button from '../common/button';
import TagBoxContainer from '../../containers/TagBoxContainter';

const Wrapper = styled(Responsive)`
    margin-top: 4rem;
`;

const WriteInput = styled.div`
    input{
        width: 100%;
        font-size: 2rem;
        border: none;
        background-color: transparent;
        outline: none;
        padding-bottom: 50px;
    }

    input::placeholder{
        font-weight: bold;
    }

    textarea{
        width: 100%;
        height: 400px;
        min-height: 320px;
        border: none;
        background-color: transparent;
        outline: none;
        resize: none;
    }

`;

const PostBtn = styled.div`
    display: flex;
`;

const WriteBtn = styled(Button)`
    width: 5.5rem;
    height: 2rem;
    margin-right: 10px;
`;

const CancelBtn = styled(Button)`
    display: inline-block;
    width: 4rem;
    height: 2rem;
    background-color: #333;
    line-height: 2rem;
    text-align: center;

    &:hover{
        background-color: #333;
    }
`;

const WritePost = ({onChange, value}) => {

    return (
        <Wrapper>
            <WriteInput>
                <input 
                    className='title'
                    placeholder='제목을 입력하세요'
                    type='text'
                    onChange={onChange}
                    name='title'
                    value={value}
                />
                <textarea
                    placeholder="내용을 작성하세요..."  
                    onChange={onChange}
                    name='content'
                    value={value}
                />
            </WriteInput>

            <TagBoxContainer />

            <PostBtn>
                <WriteBtn>포스트 등록</WriteBtn>
                <CancelBtn to='/'>취소</CancelBtn>
            </PostBtn>
        </Wrapper>
    )
}

export default WritePost;