import React from 'react';
import { StLabel, StInputForm, StTextArea, StPtag, StCloseBtn, StModalName } from 'components/Input/InputForm';
import { StButton, StRoundBtnSvg } from 'components/Button';
import { useMutation, useQueryClient } from 'react-query';
import { updateTodo } from 'api/todos';
import useInput from 'hooks/useInput';

function EditForm({ toggleModal, thisData }) {
    const queryClient = useQueryClient();

    const [title, onChangeTitleHandler] = useInput('');
    const [contents, onChangeContentsHandler] = useInput('');

    const mutationUpdate = useMutation(updateTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        }
    });

    const updateTodoHandler = (e) => {
        e.preventDefault();
        const updateData = {
            ...thisData,
            title: title,
            contents: contents
        };
        mutationUpdate.mutate(updateData);
        toggleModal();
    };

    return (
        <>
            <StCloseBtn>
                <StModalName>수정하기</StModalName>
                <StRoundBtnSvg onClick={toggleModal}>
                    <img src="/closeIcon.svg" alt="" />
                </StRoundBtnSvg>
            </StCloseBtn>
            <form onSubmit={updateTodoHandler}>
                <StLabel htmlFor="title">제목</StLabel>
                <StInputForm placeholder={thisData.title} name="title" type="text" value={title} onChange={onChangeTitleHandler} />
                {title.length < 2 ? (
                    <StPtag>2자 이상 입력해주세요</StPtag>
                ) : (
                    <StPtag>
                        <br />
                    </StPtag>
                )}
                <StLabel htmlFor="contents">내용</StLabel>
                <StTextArea placeholder={thisData.contents} name="contents" type="text" value={contents} onChange={onChangeContentsHandler} />
                {contents.length < 4 ? (
                    <StPtag>4자 이상 입력해주세요</StPtag>
                ) : (
                    <StPtag>
                        <br />
                    </StPtag>
                )}
                <StButton disabled={title.length >= 2 && contents.length >= 4 ? false : true} type="submit" $btnSize="large" $fontColor={'black'}>
                    등록
                </StButton>
            </form>
        </>
    );
}

export default EditForm;
