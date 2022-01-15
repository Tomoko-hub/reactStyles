import React from 'react';
import styled from 'styled-components';

const StyledComponents = () => {
    return (
        <StyledContainer>
            <StyledParagraph>StyledComponents</StyledParagraph>
            <StyledButton>jee</StyledButton>
        </StyledContainer>
    )
}

export default StyledComponents

const StyledContainer = styled.div`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding:8px;
    margin:8px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`;

const StyledParagraph = styled.p`
    margin: 0;
    color: #3d84a8;
`;

const StyledButton = styled.button`
    background-color:#abedd8;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover{
        background-color: #46cdcf;
        color: #fff;
        cursor: pointer;
    }
`;
