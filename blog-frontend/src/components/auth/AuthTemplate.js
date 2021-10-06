import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const AuthStyle = styled.div`    
    background: #fff;
    width: 500px;
    padding: 30px;
    /* margin: 0 auto; */
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
`;

const Title = styled(Link)`
        display: block;
        font-size: 24px;
        letter-spacing: 4px;
        font-weight: 800;
        text-align: center;
        color: #333;
        padding-bottom: 30px;
        cursor: pointer;
`


const AuthTemplate = ({children}) => {
    return (
        <AuthStyle>
            <Title to='/'>REACTERS</Title>
            {children}
        </AuthStyle>
    );
}

export default AuthTemplate;