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

// const testCont = {
//     title: '테스트 포스트',
//     userid: 'TestId',
//     date: '2019.5.5',
//     tag: ['테스트', '테스트2'],
//     text: '내용입니다. 테스트 내용입니다. 내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.테스트 내용입니다.내용입니다. 테스트 내용입니다.내용입니다. 테스트 내용입니다.'
// }

const PostContent = ({content}) => {
    const {body, user, tags, title, publishedDate, _id} = content
    console.log(content);
    // console.log(user);

    // console.log(id);
    // console.log(userId)
    // console.log(type)

    const url = `/@:${user.username}/:${_id}`
    
    return(
        <Content>
            <Link to={url}>{title}</Link>
            <div className="info_wrap">
                <ul className="info">
                    <li>{user.username}</li>
                    <li>{publishedDate}</li>
                </ul>
                <ul className="tag">
                    {
                        tags.map((tag) => (
                            <li>{tag}</li>
                        ))
                    }
                    
                </ul>
            </div>
            <PostListText>{body}</PostListText>
            
        </Content>
    )
}

export default PostContent;