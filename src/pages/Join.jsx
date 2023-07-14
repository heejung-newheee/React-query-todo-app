import { StBg } from 'components/Background';
import Modal from 'components/Modal';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import Layout from 'components/common/Layout';
import useInput from 'hooks/useInput';
import React from 'react';
import { StCloseBtn, StModalName, StLabel, StInputForm, StTextArea, StPtag } from 'components/Input/InputForm';
import { StButton, StButtonWrap } from 'components/Button';
import { StTodoBoard } from 'components/Todo/TodoList';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { register } from 'api/users';
import shortid from 'shortid';

function Join() {
    const [uid, onChangeIdHandler] = useInput('');
    const [pw, onChangePwHandler] = useInput('');
    const [pwConfirm, onChangePwConfirmHandler] = useInput('');
    const [name, onChangeNameHandler] = useInput('');
    const navigate = useNavigate();

    // 쿼리관련
    const queryClient = useQueryClient();
    const mutationJoin = useMutation(register, {
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        }
    });
    const registerHandler = (e) => {
        e.preventDefault();
        const newUser = {
            id: shortid.generate(),
            uid: uid,
            pw: pw,
            userName: name,
            isLogin: false
        };
        mutationJoin.mutate(newUser);
        navigate('/login');
    };

    return (
        <StBg>
            <Header />
            <Layout>
                <StTodoBoard>
                    <StCloseBtn>
                        <StModalName>회원 가입</StModalName>
                    </StCloseBtn>
                    <form onSubmit={registerHandler}>
                        <StLabel htmlFor="">이름</StLabel>
                        <StInputForm placeholder="아이디를 입력하세요" name="" type="text" value={name} onChange={onChangeNameHandler} />
                        {name.length < 2 ? (
                            <StPtag>2자 이상 입력해주세요</StPtag>
                        ) : (
                            <StPtag>
                                <br />
                            </StPtag>
                        )}
                        <StLabel htmlFor="">아이디</StLabel>
                        <StInputForm placeholder="아이디를 입력하세요" name="" type="text" value={uid} onChange={onChangeIdHandler} />
                        {uid.length < 5 ? (
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
                        <StLabel htmlFor="contents">비밀번호 확인</StLabel>
                        <StInputForm placeholder="비밀번호를 입력하세요" name="" type="password" value={pwConfirm} onChange={onChangePwConfirmHandler} />
                        {pw === pwConfirm ? (
                            <StPtag>
                                <br />
                            </StPtag>
                        ) : (
                            <StPtag>비밀번호가 같은지 확인하세요</StPtag>
                        )}
                        <StButtonWrap>
                            <StButton disabled={uid.length >= 5 && pw.length >= 5 ? false : true} type="submit" $fontColor={'black'}>
                                회원 가입
                            </StButton>
                            <StButton
                                onClick={() => {
                                    navigate('/');
                                }}
                                type="button"
                                $fontColor={'black'}>
                                홈으로가기
                            </StButton>
                        </StButtonWrap>
                    </form>
                </StTodoBoard>
            </Layout>
            <Footer />
        </StBg>
    );
}

export default Join;
