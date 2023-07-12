import React from 'react';
import { styled } from 'styled-components';
import { StButton } from '../Button';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <StHeader>
            <StTitleH1 onClick={() => navigate('/')}>
                <img src="/logo.svg" alt="logo" />
                Hagra Todo
            </StTitleH1>
            <StGnb>
                <StButton onClick={() => navigate('/login')}>로그인</StButton>
                <StButton onClick={() => navigate('/join')}>회원가입</StButton>
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
const StTitleH1 = styled.h1`
    cursor: pointer;
    font-size: 24px;
    display: flex;
    align-items: center;
    img {
        -webkit-filter: brightness(0) invert(1);
        filter: brightness(0) invert(1);
        width: 28px;
        margin-right: 10px;
    }
`;
const StGnb = styled.div``;
