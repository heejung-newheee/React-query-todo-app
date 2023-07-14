import React from 'react';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';

function Modal({ children }) {
    return createPortal(
        <StModalBg>
            <StModalBox>{children}</StModalBox>
        </StModalBg>,
        document.getElementById('portal-root')
    );
}

export default Modal;

const StModalBg = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.$bgMdColor || 'rgba(225, 225, 225, 0.733)'};
    z-index: 888;
`;
const StModalBox = styled.div`
    width: 50%;
    max-width: 450px;
    min-height: 30%;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
`;
export { StModalBg, StModalBox };
