import React from 'react';
import styled from 'styled-components'
import Responsive from '../common/responsive';
import HeaderContainer from '../../containers/HeaderContainer';

const Wrapper = styled(Responsive)`
    padding-top: 100px;
`;

const Content = styled.div`
    
    padding-bottom: 80px;
    color: #333;

    h3{
        font-size: 36px;
        font-weight: bold;
        color: #333;
        padding-bottom: 1rem;
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
     color: #555;   
    }
`;

const PostView = ({content}) => {
    console.log(content);

    const {user, title, body, tags, publishedDate} = content;

    return (
        <>
            <HeaderContainer />
            <Wrapper>   
            <Content>
            <h3>{title}</h3>
            <div className="info_wrap">
                <ul className="info">
                    <li>{user.username}</li>
                    <li>{publishedDate}</li>
                </ul>
                <ul className="tag">
                    {tags.map((tag, index)=>(
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
                <p>{body}</p>
        </Content>
            </Wrapper>
        </>
    )
}

export default PostView