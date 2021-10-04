import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledButton = styled.button`

        width: 100%;
        height: 50px;

        border: none;
        border-radius: 5px;

        background: #87b6c9;

        color: #fff;
        font-weight: bold;
        /* font-size: 18px; */

        cursor: pointer;

    &:hover{
        background: #6ea3ba;
    }

`;


const StyledLink = styled(Link)`

        width: 100%;
        height: 50px;

        border: none;
        border-radius: 5px;

        background: #87b6c9;

        color: #fff;
        font-weight: bold;
        /* font-size: 18px; */

        cursor: pointer;

    &:hover{
        background: #6ea3ba;
    }

`;

const Button = props => {
    return props.to ? (
        <StyledLink {...props}/>
    ) : (
        <StyledButton {...props} />
    )
}

export default Button;