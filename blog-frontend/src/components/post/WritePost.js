import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/responsive';
import Button from '../common/button';

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

const TagInput = styled.div`
    /* padding-bottom: 30px; */

    p{
        font-weight: 400;
        font-size: 1rem;
        padding-bottom: 5px;
    }

    input{
        width: 13rem;
        height: 2rem;
        border: 1px solid #333;
        border-radius: 5px 0 0 5px;
        padding-left: 13px;
        outline: none;
    }

    .input_wrap{
        display: flex;
    }
`;

const TagCont = styled.div`
    ul{
        padding: 20px 0;
        display: flex;
    }
    li{
        /* width: 1rem; */
        background-color: #ddd;
        margin-right: 12px;
        padding: 5px;
        border-radius: 3px;
        color: #555;
    }
`;

const TagBtn = styled(Button)`
    width: 3rem;
    height: 2rem;
    background-color: #333;
    color: #fff;
    border-radius: 0 5px 5px 0;
    line-height: 2rem;
    &:hover{
        background-color: #333;
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

const WritePost = () => {
    return (
        <Wrapper>
            <WriteInput>
                <input className='title' type='text' placeholder='제목을 입력하세요' />
                <textarea placeholder="내용을 작성하세요..."  />
            </WriteInput>

            <TagInput>
                <p>태그</p>
                <div className="input_wrap">
                    <input placeholder="태그를 입력하세요" />
                    <TagBtn>추가</TagBtn>
                </div>
            </TagInput>
            <TagCont>
                <ul>
                    <li>태그1</li>
                    <li>Test 태그2</li>
                </ul>
            </TagCont>

            <PostBtn>
                <WriteBtn>포스트 등록</WriteBtn>
                <CancelBtn to='/'>취소</CancelBtn>
            </PostBtn>
        </Wrapper>
    )
}

export default WritePost;