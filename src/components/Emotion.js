/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

const Emotions = () => {
    const containerStyle =css`
        border: solid 2px #392eff;
        border-radius: 20px;
        padding:8px;
        margin:8px;
        display:flex;
        justify-content:space-around;
        align-items:center;
    `;

    const titleStyle=css({
        margin: 0,
        color: "#3d84a8"
    })

    return (
        <div css={containerStyle}>
            <p css={titleStyle}>Emotions</p>
            <StyledButton>Button</StyledButton>
        </div>
    )
}

export default Emotions;

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
