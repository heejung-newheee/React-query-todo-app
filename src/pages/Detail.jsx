import React, { useState } from 'react';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { StBg } from '../components/Background';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteTodo, getTodos } from 'api/todos';
import { useLocation, useNavigate } from 'react-router-dom';
import { StTodoBoard } from 'components/Todo/TodoList';
import { StButton, StRoundBtnSvg } from 'components/Button';
import { styled } from 'styled-components';
import Modal from 'components/Modal';
import { StCloseBtn, StModalName, StLabel, StInputForm, StTextArea, StPtag } from 'components/Input/InputForm';
import useInput from 'hooks/useInput';

function Detail() {
    const { state } = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [title, onChangeTitleHandler] = useInput('');
    const [contents, onChangeContentsHandler] = useInput('');
    const toggleModal = () => {
        setIsOpen((isOpen) => !isOpen);
    };
    const queryClient = useQueryClient();
    // 삭제 확인 용 메시지 관리
    const CONFIRM_MESSAGE = `[삭제 확인]\n\n"${state.title}" 항목을 정말로 삭제하시겠습니까?\n삭제를 원치 않으시면 [취소] 버튼을 눌러주세요.`;
    const mutateDel = useMutation(deleteTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        }
    });
    const deleteTodoHandler = (id) => {
        if (window.confirm(CONFIRM_MESSAGE)) {
            mutateDel.mutate(state.id);
            // navigate('/');
            window.location.replace('/');
            // useEffect로 상태 변화가 있을때 다시 불러오게 하던가 - uselocation을 검색하면 많이 나옴
        }
    };

    return (
        <>
            <StBg>
                <Header />
                <Layout>
                    <StTodoBoard>
                        <div>
                            {state.id}
                            <StDeTitle>To Do Title</StDeTitle>
                            <StDeContents>{state.title}</StDeContents>
                            <StDeTitle>To Do Contents</StDeTitle>
                            <StDeContents height={'180px'}>{state.contents}</StDeContents>
                            <StDeTitle>완료 여부 : {state.isDone ? '완료' : '미완료'}</StDeTitle>
                        </div>
                        <StEditBtn>
                            <StButton onClick={toggleModal} fontColor={'black'}>
                                수정
                            </StButton>
                            <StButton onClick={deleteTodoHandler} fontColor={'black'}>
                                삭제
                            </StButton>
                        </StEditBtn>
                    </StTodoBoard>

                    {isOpen && (
                        <Modal>
                            <StCloseBtn>
                                <StModalName>수정하기</StModalName>
                                <StRoundBtnSvg onClick={toggleModal}>
                                    <img src="/closeIcon.svg" alt="" />
                                </StRoundBtnSvg>
                            </StCloseBtn>
                            <form>
                                <StLabel htmlFor="title">제목</StLabel>
                                <StInputForm placeholder={state.title} name="title" type="text" value={title} onChange={onChangeTitleHandler} />
                                {title.length < 5 ? (
                                    <StPtag>5자 이상 입력해주세요</StPtag>
                                ) : (
                                    <StPtag>
                                        <br />
                                    </StPtag>
                                )}
                                <StLabel htmlFor="contents">내용</StLabel>
                                <StTextArea placeholder={state.contents} name="contents" type="text" value={contents} onChange={onChangeContentsHandler} />
                                {contents.length < 5 ? (
                                    <StPtag>5자 이상 입력해주세요</StPtag>
                                ) : (
                                    <StPtag>
                                        <br />
                                    </StPtag>
                                )}
                                <StButton disabled={title.length >= 5 && contents.length >= 5 ? false : true} type="submit" btnSize="large" fontColor={'black'}>
                                    등록
                                </StButton>
                            </form>
                        </Modal>
                    )}
                </Layout>
                <Footer />
            </StBg>
        </>
    );
}

export default Detail;

const StDeTitle = styled.h3`
    padding: 10px;
    background-color: #e4ecff;
    border-radius: 10px;
    margin: 8px 0 20px;
    font-weight: bold;
    color: #486ec7;
`;
const StDeContents = styled.div`
    padding: 10px;
    border-radius: 10px;
    margin: 8px 0 20px;
    height: ${(props) => props.height || '50px'};
`;
const StEditBtn = styled.div`
    display: flex;
    justify-content: flex-end;
`;
