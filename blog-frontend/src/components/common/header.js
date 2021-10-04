import React from 'react';
import styled, {css} from 'styled-components';
import Responsive from './responsive';
import {Link} from 'react-router-dom';

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

const StyledButton = css`
    display: block;
    /* width: 4rem; */
    padding: 0.25rem 1rem;
    background-color: #333;
    border-radius: 4px;
    color: #fff;
    /* text-decoration: none; */
    line-height: 1rem;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #444;
    }
`;

const StyledLink = styled(Link)`
    ${StyledButton}
`;

const Spacer = styled.div`
    height: 4rem;
`

const Button = (props) => {
    return(
        <StyledLink {...props} />
    );
}

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to='/' className="logo">REACTERS</Link>
                    <div className="right">
                        <span>userId</span>
                        <Button to="login">로그인</Button>
                    </div>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;