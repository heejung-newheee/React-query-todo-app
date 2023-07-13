import React, { useState } from 'react';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { StBg } from '../components/Background';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteTodo, getTodos, updateTodo } from 'api/todos';
import { useLocation, useNavigate } from 'react-router-dom';
import { StTodoBoard } from 'components/Todo/TodoList';
import { StButton, StRoundBtnSvg } from 'components/Button';
import { styled } from 'styled-components';
import Modal from 'components/Modal';
import { StCloseBtn, StModalName } from 'components/Input/InputForm';
import useInput from 'hooks/useInput';
import EditForm from 'components/Edit/EditForm';

function Detail() {
    const { isLoading, isError, data } = useQuery('todos', getTodos);

    const { state } = useLocation();
    const thisData = data?.find((item) => item.id === state.id);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    const queryClient = useQueryClient();
    const mutationDel = useMutation(deleteTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        }
    });
    const deleteTodoHandler = (id) => {
        if (window.confirm(CONFIRM_MESSAGE)) {
            mutationDel.mutate(state.id);
            navigate('/');
        }
    };

    // 예외처리
    if (isLoading) {
        return <div>로딩중입니다</div>;
    }

    // 삭제 확인 용 메시지 관리
    const CONFIRM_MESSAGE = `[삭제 확인]\n\n"${thisData.title}" 항목을 정말로 삭제하시겠습니까?\n삭제를 원치 않으시면 [취소] 버튼을 눌러주세요.`;

    return (
        <>
            <StBg>
                <Header />
                <Layout>
                    <StTodoBoard>
                        <StCloseBtn>
                            <StModalName>Date : {thisData.date}</StModalName>
                            <StRoundBtnSvg onClick={() => navigate('/')}>
                                <img src="/closeIcon.svg" alt="" />
                            </StRoundBtnSvg>
                        </StCloseBtn>
                        <div>
                            <StDeTitle>To Do Title</StDeTitle>
                            <StDeContents>{thisData.title}</StDeContents>
                            <StDeTitle>To Do Contents</StDeTitle>
                            <StDeContents height={'180px'}>{thisData.contents}</StDeContents>
                            <StDeTitle>완료 여부 : {thisData.isDone ? '완료' : '미완료'}</StDeTitle>
                        </div>
                        <StEditBtn>
                            <StButton onClick={toggleModal} $fontColor={'black'}>
                                수정
                            </StButton>
                            <StButton onClick={deleteTodoHandler} $fontColor={'black'}>
                                삭제
                            </StButton>
                        </StEditBtn>
                    </StTodoBoard>

                    {isOpen && (
                        <Modal>
                            <EditForm toggleModal={toggleModal} thisData={thisData} />
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
