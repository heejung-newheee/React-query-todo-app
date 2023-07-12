import React from 'react';
import { styled } from 'styled-components';

function Button({ children }) {
    return <StButton>{children}</StButton>;
}

export default Button;

const StButtonWrap = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
`;
const StButton = styled.button`
    position: relative;
    cursor: pointer;
    align-items: center;
    background-color: ${(props) => props.bgColor || 'transparent'};
    border: ${(props) => props.stBorder || 'solid 3px #8babfc'};
    color: ${(props) => props.fontColor || '#fff'};
    border-radius: 8px;
    padding: 1px 0;

    ${({ btnSize }) => {
        let btnHeight;
        let btnWidth;
        switch (btnSize) {
            case 'large':
                btnWidth = '100%';
                btnHeight = '50px';
                break;

            case 'small':
                btnWidth = '100px';
                btnHeight = '40px';
                break;

            default:
                btnWidth = '130px';
                btnHeight = '45px';
                break;
        }
        return `width : ${btnWidth};
                height : ${btnHeight}`;
    }};
    &::before {
        content: '';
        width: 0%;
        height: 100%;
        position: absolute;
        border-radius: 4px;
        z-index: -1;
        background-color: #8babfc;
        left: 0;
        top: 0;
        transition: 0.3s ease-in-out;
    }
    &:hover {
        color: #fff;
        z-index: 1;
    }

    &:hover::before {
        content: '';
        width: 100%;
        height: 100%;
        color: white;
        position: absolute;
    }
    &:active {
        background-color: ${(props) => props.acColor || props.bgColor};
    }
    &:not(:last-of-type) {
        margin-right: 10px;
    }
    &:disabled {
        background-color: #ddd;
        border: 0;
        color: #555;
        cursor: default;
        &:hover::before {
            width: 0%;
            height: 0;
        }
    }
`;

const StRoundBtnSvg = styled.div`
    cursor: pointer;
    padding: 7px;
    width: 40px;
    height: 40px;
    background-color: #8babfc;
    border-radius: 50%;
    box-shadow: rgba(18, 14, 250, 0.1) 2px 4px 10px;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    /* :hover {
        background-color: #8babfc;
        transform: rotateY(180deg);
    } */
    img {
        filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(82deg) brightness(105%) contrast(101%);
        width: 22px;
    }
`;

export { StButtonWrap, StButton, StRoundBtnSvg };
