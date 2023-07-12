import React from 'react';
import { styled } from 'styled-components';
import { deleteTodo, switchTodo } from '../../api/todos';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

function Todo({ todo }) {
    const navigate = useNavigate();
    //리액트 쿼리 관련 코드
    const queryClient = useQueryClient();
    const mutateUp = useMutation(switchTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        }
    });
    const mutateDel = useMutation(deleteTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        }
    });
    const switchTodoHandler = (id) => {
        mutateUp.mutate(todo.id);
    };
    const deleteTodoHandler = (id) => {
        mutateDel.mutate(todo.id);
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
                            state: { id: todo.id, title: todo.title, contents: todo.contents, isDone: todo.isDone }
                        });
                    }}>
                    <StTodoTitleH5>{todo.title}</StTodoTitleH5>
                    <StTodoContents>{todo.contents}</StTodoContents>
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
    align-items: center;
    border: solid 3px #b1c6fd;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
`;
const StCheckBox = styled.div`
    width: 5%;
    cursor: pointer;
`;
const StCheckSvg = styled.img`
    width: 20px;
    filter: invert(82%) sepia(25%) saturate(1197%) hue-rotate(186deg) brightness(99%) contrast(101%);
    font-weight: bold;
`;
const StContentArea = styled.div`
    width: 90%;
    cursor: pointer;
    &.done {
        text-decoration: line-through;
    }
`;
const StEditArea = styled.div`
    cursor: pointer;
    fill: #b1c6fd;
    width: 15%;
    display: flex;
    justify-content: flex-end;
`;
const StTodoTitleH5 = styled.div`
    margin-bottom: 10px;
`;
const StTodoContents = styled.p`
    font-size: 0.8rem;
    color: #868686;
`;
const StDelImg = styled.img`
    width: 20px;
    filter: invert(82%) sepia(25%) saturate(1197%) hue-rotate(186deg) brightness(99%) contrast(101%);
`;
