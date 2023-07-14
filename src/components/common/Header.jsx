import React from 'react';
import { styled } from 'styled-components';
import { StButton } from '../Button';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { checkUsers, loginUser } from 'api/users';

function Header() {
    const { isLoading, isError, data } = useQuery('users', checkUsers);
    console.log(data);
    const loginUserInfo = data?.find((item) => item.isLogin === true);

    console.log(loginUserInfo);
    const navigate = useNavigate();

    //리액트 쿼리
    const queryClient = useQueryClient();
    const mutationLogout = useMutation(loginUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        }
    });
    const logOutHandler = () => {
        const loginInfo = {
            ...loginUserInfo,
            isLogin: false
        };
        mutationLogout.mutate(loginInfo);
        navigate('/');
    };
    return (
        <StHeader>
            <StTitleH1 onClick={() => navigate('/')}>
                <img src="/logo.svg" alt="logo" />
                Hagra Todo
            </StTitleH1>
            {loginUserInfo ? (
                <StGnb>
                    <StButton onClick={logOutHandler}>로그아웃</StButton>
                </StGnb>
            ) : (
                <StGnb>
                    <StButton onClick={() => navigate('/login')}>로그인</StButton>
                    <StButton onClick={() => navigate('/join')}>회원가입</StButton>
                </StGnb>
            )}
        </StHeader>
    );
}

export default Header;
const StHeader = styled.header`
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
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
