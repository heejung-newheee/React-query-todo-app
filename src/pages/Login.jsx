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

function Login() {
    const [id, onChangeIdHandler] = useInput('');
    const [pw, onChangePwHandler] = useInput('');
    const navigate = useNavigate();
    return (
        <StBg>
            <Header />
            <Layout>
                <StTodoBoard>
                    <StCloseBtn>
                        <StModalName>로그인</StModalName>
                    </StCloseBtn>
                    <form>
                        <StLabel htmlFor="">아이디</StLabel>
                        <StInputForm placeholder="아이디를 입력하세요" name="" type="text" value={id} onChange={onChangeIdHandler} />
                        {id.length < 5 ? (
                            <StPtag>5자 이상 입력해주세요</StPtag>
                        ) : (
                            <StPtag>
                                <br />
                            </StPtag>
                        )}
                        <StLabel htmlFor="contents">비밀번호</StLabel>
                        <StInputForm placeholder="비밀번호를 입력하세요" name="" type="password" value={pw} onChange={onChangePwHandler} />
                        {pw.length < 5 ? (
                            <StPtag>5자 이상 입력해주세요</StPtag>
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
                            <StButton disabled={id.length >= 5 && pw.length >= 5 ? false : true} type="submit" $fontColor={'black'}>
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
