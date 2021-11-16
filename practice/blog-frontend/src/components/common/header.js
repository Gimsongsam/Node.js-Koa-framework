import React from 'react';
import styled from 'styled-components';
import Responsive from './responsive';
import {Link} from 'react-router-dom';
import Button from './button';

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    /* height: 3rem; */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    background-color: #f7f7f7;
`;

const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
    .logo{
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;
        color: #333;
    }

    .right{
        display: flex;
        align-items: center;
        span{
            font-weight: bold;
            padding-right: 15px;
        }
    }
`;

const Spacer = styled.div`
    height: 4rem;
`

const UserButton = styled(Button)`
    display: block;
    /* width: 1.5rem; */
    padding: 0 10px;
    height: 1.5rem;
    line-height: 1.5rem;
    background-color: #333;
    text-align: center;
    &:hover{
        background-color: #444;
    }
`


const Header = ({userId, onLogout}) => {

    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to='/' className="logo">REACTERS</Link>
                        {userId === '' ? (
                            <div className="right">
                                <UserButton to="login">로그인</UserButton>
                            </div>
                        ) : (
                            <div className="right">
                                <span>{userId}</span>
                                <UserButton to='/' onClick={() => onLogout()}>로그아웃</UserButton>
                            </div>
                        )}
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;