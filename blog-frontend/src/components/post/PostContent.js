import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Content = styled.div`
    
    padding-bottom: 80px;
    color: #333;

    a{
        font-size: 36px;
        font-weight: bold;
        color: #333;
    }
    ul{
        display: flex;
    }

    .info_wrap{
        padding-bottom: 30px;
        font-size: 16px;
    }

    .info{
        padding-bottom: 5px;
        li:first-child{
            font-weight: bold;
            color: #999;
            padding-right: 10px;
        }
        li:last-child{
            color: #aaa;
        }
    }

    .tag{
        li{
            padding-right: 10px;
            color: #70BDD7;
            font-weight: 600;
        }
    }

    p{
        
    }
`;

const PostListText = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap:break-word;
    /* line-height: 1.2em;
    height: 3.6em; */
`;

// const PostViewText = styled.p`

// `;

const testCont = {
    title: '테스트 포스트',
    userid: 'TestId',
    date: '2019.5.5',
    tag: ['테스트', '테스트2'],
    text: '내용입니다. 테스트 내용입니다. 내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.'
}

const PostContent = ({type}) => {
    const {title, userid, date, tag, text} = testCont;
    return(
        <Content>
            <Link to="/@:test1/:test1234">{title}</Link>
            <div className="info_wrap">
                <ul className="info">
                    <li>{userid}</li>
                    <li>{date}</li>
                </ul>
                <ul className="tag">
                    <li>{tag[0]}</li>
                    <li>{tag[1]}</li>
                </ul>
            </div>
            {type === 'PostForm' ? (
                <PostListText>{text}</PostListText>
            ) : (
                <p>{text}</p>
            )}
            
        </Content>
    )
}

export default PostContent;