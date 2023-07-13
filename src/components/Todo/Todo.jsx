import React from 'react';
import { styled } from 'styled-components';
import { deleteTodo, switchTodo } from '../../api/todos';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

function Todo({ todo }) {
    const navigate = useNavigate();

    // 삭제 확인 용 메시지 관리
    const CONFIRM_MESSAGE = `[삭제 확인]\n\n"${todo.title}" 항목을 정말로 삭제하시겠습니까?\n삭제를 원치 않으시면 [취소] 버튼을 눌러주세요.`;

    //리액트 쿼리 관련 코드
    const queryClient = useQueryClient();
    const mutationSwitch = useMutation(switchTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        }
    });
    const mutationDel = useMutation(deleteTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        }
    });
    const switchTodoHandler = (id) => {
        console.log('스위치');
        mutationSwitch.mutate(todo.id);
    };
    const deleteTodoHandler = (id) => {
        if (window.confirm(CONFIRM_MESSAGE)) mutationDel.mutate(todo.id);
    };
    return (
        <>
            <StTodo>
                <StCheckBox onClick={switchTodoHandler}>
                    {todo.isDone === false ? <StCheckSvg src="/unCheckedIcon.svg" /> : <StCheckSvg src="/checkedIcon.svg" />}
                </StCheckBox>

                <StContentArea
                    onClick={() => {
                        navigate(`/detail/:${todo.id}`, {
                            state: { id: todo.id, title: todo.title, contents: todo.contents, isDone: todo.isDone, date: todo.date }
                        });
                    }}>
                    <StTodoTitleH5 className={todo.isDone === false ? '' : 'checked'}>{todo.title}</StTodoTitleH5>
                    <StTodoContents className={todo.isDone === false ? '' : 'checked'}>{todo.contents}</StTodoContents>
                </StContentArea>
                <StEditArea onClick={deleteTodoHandler}>
                    {/* <StDelImg src="/src/assets/img/del.svg" alt="" /> */}
                    <StDelImg src="/del.svg" alt="" />
                </StEditArea>
            </StTodo>
        </>
    );
}

export default Todo;

const StTodo = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    border: solid 3px #b1c6fd;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
`;
const StCheckBox = styled.div`
    width: 5%;
    cursor: pointer;
    @media only screen and (max-width: 960px) {
        width: 8%;
    }
`;
const StCheckSvg = styled.img`
    width: 25px;
    filter: invert(82%) sepia(25%) saturate(1197%) hue-rotate(186deg) brightness(99%) contrast(101%);
    font-weight: bold;
    @media only screen and (max-width: 768px) {
        width: 18px;
    }
`;
const StContentArea = styled.div`
    width: 90%;
    cursor: pointer;
    &.done {
        text-decoration: line-through;
    }
    @media only screen and (max-width: 960px) {
        width: 87%;
    }
`;
const StEditArea = styled.div`
    cursor: pointer;
    fill: #b1c6fd;
    display: flex;
    justify-content: flex-end;
`;
const StTodoTitleH5 = styled.div`
    margin-bottom: 7px;
    &.checked {
        color: grey;
        text-decoration-line: line-through;
    }
`;
const StTodoContents = styled.p`
    font-size: 0.8rem;
    color: #868686;
    &.checked {
        color: grey;
        text-decoration-line: line-through;
    }
`;
const StDelImg = styled.img`
    width: 20px;
    filter: invert(82%) sepia(25%) saturate(1197%) hue-rotate(186deg) brightness(99%) contrast(101%);
`;
