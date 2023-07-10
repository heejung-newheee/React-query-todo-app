import React, { useState } from 'react';
import Modal from '../Modal';
import { StButton, StRoundBtnSvg } from '../Button';
import { styled } from 'styled-components';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import uuid from 'react-uuid';
import { addTodo } from '../../api/todos';

function InputForm({ closeAddModal }) {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const queryClient = useQueryClient();
    const mutation = useMutation(addTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        }
    });
    const addTodoHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            title,
            contents,
            isDone: false,
            id: uuid()
        };
        mutation.mutate(newTodo);
        closeAddModal();
    };
    return (
        <Modal>
            <StCloseBtn>
                <StModalName>추가하기</StModalName>
                <StRoundBtnSvg onClick={closeAddModal} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </StRoundBtnSvg>
            </StCloseBtn>
            <form onSubmit={addTodoHandler}>
                <StLabel htmlFor="title">제목</StLabel>
                <StInputForm
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <StLabel htmlFor="contents">내용</StLabel>
                <StTextArea
                    name="contents"
                    type="text"
                    value={contents}
                    onChange={(e) => {
                        setContents(e.target.value);
                    }}
                />
                <StButton type="submit" btnSize="large" bgColor={'#b1c6fd'}>
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
    margin: 8px 0 30px;
    &:focus {
        border: solid 3px #8eabf7;
        box-shadow: rgba(18, 14, 250, 0.1) 2px 4px 10px;
    }
`;
