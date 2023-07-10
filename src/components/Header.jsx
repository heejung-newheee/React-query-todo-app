import React from 'react';
import { styled } from 'styled-components';
import { StButton } from './Button';

function Header() {
    return (
        <StHeader>
            <StTitleH1>My Todo List App</StTitleH1>
            <StGnb>
                <StButton>로그인</StButton>
                <StButton>회원가입</StButton>
            </StGnb>
        </StHeader>
    );
}

export default Header;
const StHeader = styled.header`
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;
const StTitleH1 = styled.h1``;
const StGnb = styled.div``;
