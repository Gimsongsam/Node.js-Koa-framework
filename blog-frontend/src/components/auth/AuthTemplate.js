import React from 'react';
import styled from 'styled-components';
// import LoginContainer from '../containers/LoginContainer';
// import RegisterContainer from '../containers/RegisterContainer';

const AuthStyle = styled.div`    
    background: #fff;
    width: 500px;
    padding: 30px;
    /* margin: 0 auto; */
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);

    h3{
        font-size: 24px;
        letter-spacing: 4px;
        font-weight: 800;
        text-align: center;
        color: #333;
        padding-bottom: 30px;
    }
`;


const AuthTemplate = ({children}) => {
    return (
        <AuthStyle>
            <h3>REACTERS</h3>
            {children}
        </AuthStyle>
    );
}

export default AuthTemplate;