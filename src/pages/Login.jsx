import { StBg } from 'components/Background';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import Layout from 'components/common/Layout';
import React from 'react';
import { StCloseBtn, StModalName, StLabel, StInputForm, StTextArea, StPtag } from 'components/Input/InputForm';
import { StButton, StButtonWrap } from 'components/Button';
import { StTodoBoard } from 'components/Todo/TodoList';
import { useNavigate } from 'react-router-dom';
import useInput from 'hooks/useInput';
import { checkUsers, loginUser } from 'api/users';
import { useMutation, useQuery, useQueryClient } from 'react-query';

function Login() {
    const { isLoading, isError, data } = useQuery('users', checkUsers);
    console.log(data);
    const [id, onChangeIdHandler] = useInput('');
    const [pw, onChangePwHandler] = useInput('');
    const navigate = useNavigate();

    //리액트 쿼리
    const queryClient = useQueryClient();
    const mutationLogin = useMutation(loginUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        }
    });

    const loginHandler = (e) => {
        e.preventDefault();
        const loginUserInfo = data.find((item) => item.uid === id && item.pw === pw);
        if (loginUserInfo) {
            console.log(loginUserInfo);
            const loginInfo = {
                ...loginUserInfo,
                isLogin: true
            };
            mutationLogin.mutate(loginInfo);
            navigate('/');
        } else {
            alert('아이디 비밀번호를 확인해주세요');
        }
    };

    return (
        <StBg>
            <Header />
            <Layout>
                <StTodoBoard>
                    <StCloseBtn>
                        <StModalName>로그인</StModalName>
                    </StCloseBtn>
                    <form onSubmit={loginHandler}>
                        <StLabel htmlFor="">아이디</StLabel>
                        <StInputForm placeholder="아이디를 입력하세요" name="" type="text" value={id} onChange={onChangeIdHandler} />
                        {id.length < 4 ? (
                            <StPtag>4자 이상 입력해주세요</StPtag>
                        ) : (
                            <StPtag>
                                <br />
                            </StPtag>
                        )}
                        <StLabel htmlFor="contents">비밀번호</StLabel>
                        <StInputForm placeholder="비밀번호를 입력하세요" name="" type="password" value={pw} onChange={onChangePwHandler} />
                        {pw.length < 4 ? (
                            <StPtag>4자 이상 입력해주세요</StPtag>
                        ) : (
                            <StPtag>
                                <br />
                            </StPtag>
                        )}

                        <StButtonWrap>
                            <StButton
                                onClick={() => {
                                    navigate('/');
                                }}
                                type="submit"
                                $fontColor={'black'}>
                                홈으로가기
                            </StButton>
                            <StButton disabled={id.length >= 4 && pw.length >= 4 ? false : true} type="submit" $fontColor={'black'}>
                                로그인
                            </StButton>
                        </StButtonWrap>
                    </form>
                </StTodoBoard>
            </Layout>
            <Footer />
        </StBg>
    );
}

export default Login;
