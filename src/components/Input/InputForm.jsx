import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import { StButton, StRoundBtnSvg } from '../Button';
import { styled } from 'styled-components';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addTodo } from '../../api/todos';
import shortid from 'shortid';
import useInput from 'hooks/useInput';

function InputForm({ toggleModal }) {
    const [title, onChangeTitleHandler] = useInput('');
    const [contents, onChangeContentsHandler] = useInput('');

    const queryClient = useQueryClient();
    const mutation = useMutation(addTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        }
    });
    const addTodoHandler = (e) => {
        e.preventDefault();
        if (title.length < 5) {
            alert('5글자 이상 적어주세요');
        } else if (contents.length < 5) {
            alert('5글자 이상 적어주세요');
        } else {
            const newTodo = {
                title,
                contents,
                isDone: false,
                id: shortid.generate()
            };
            mutation.mutate(newTodo);
            toggleModal();
        }
    };
    return (
        <Modal>
            <StCloseBtn>
                <StModalName>추가하기</StModalName>
                <StRoundBtnSvg onClick={toggleModal}>
                    <img src="/closeIcon.svg" alt="" />
                </StRoundBtnSvg>
            </StCloseBtn>
            <form onSubmit={addTodoHandler}>
                <StLabel htmlFor="title">제목</StLabel>
                <StInputForm name="title" type="text" value={title} onChange={onChangeTitleHandler} />
                {title.length < 5 ? (
                    <StPtag>5자 이상 입력해주세요</StPtag>
                ) : (
                    <StPtag>
                        <br />
                    </StPtag>
                )}
                <StLabel htmlFor="contents">내용</StLabel>
                <StTextArea name="contents" type="text" value={contents} onChange={onChangeContentsHandler} />
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
    );
}

export default InputForm;

const StCloseBtn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;
const StModalName = styled.span`
    font-size: 0.8rem;
    font-weight: bold;
    color: #b1c6fd;
`;
const StLabel = styled.label`
    font-size: 0.9rem;
`;
const StInputForm = styled.input`
    width: 100%;
    border: none;
    padding: 10px;
    border: solid 3px #b1c6fd;
    border-radius: 10px;
    margin: 8px 0 12px;
    &:focus {
        border: solid 3px #8eabf7;
        box-shadow: rgba(18, 14, 250, 0.1) 2px 4px 10px;
    }
`;
const StTextArea = styled.textarea`
    width: 100%;
    border: none;
    padding: 10px;
    border: solid 3px #b1c6fd;
    border-radius: 10px;
    margin: 8px 0 12px;
    &:focus {
        border: solid 3px #8eabf7;
        box-shadow: rgba(18, 14, 250, 0.1) 2px 4px 10px;
    }
`;
const StPtag = styled.p`
    color: #b1c6fd;
    font-size: 0.8rem;
    margin-bottom: 20px;
`;

export { StCloseBtn, StModalName, StLabel, StInputForm, StTextArea, StPtag };
