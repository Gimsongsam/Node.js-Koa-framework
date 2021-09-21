import React from 'react';
import styled, {css} from 'styled-components';
import Responsive from './responsive';
import {Link} from 'react-router-dom';

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    /* height: 3rem; */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
    .logo{
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;
    }
    .right{
        /* display: flex;
        align-items: center;
        padding: 0.5rem; */
    }
`;

const StyledButton = css`
    padding: 0.5rem;
    background-color: #78c0cf;
    border-radius: 4px;
    color: #fff;
    /* text-decoration: none; */
    line-height: 1;
    cursor: pointer;
    &:hover{
        background-color: #70bdcc;
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
                    <logo>React</logo>
                    <div className="right">
                        <Button to="login">로그인</Button>
                    </div>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;