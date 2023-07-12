import React from 'react';
import { styled } from 'styled-components';
import Todo from './Todo';
import { useQuery } from 'react-query';
import { getTodos } from '../../api/todos';

function TodoList({ isDone }) {
    const { isLoading, isError, data } = useQuery('todos', getTodos);

    // 예외처리
    if (isLoading) {
        return <div>로딩중입니다</div>;
    }

    return (
        <StTodoBoard>
            <StBoardTitleH3>{isDone ? 'To do' : 'Done'}</StBoardTitleH3>
            <StTodoWrap>
                {/* // data?.(옵셔널 체이닝) 참일경우 실행 아님 undefined 반환하고 끝!*/}
                {data
                    .filter((todo) => todo.isDone === !isDone)
                    .map((todo) => {
                        return <Todo key={todo.id} todo={todo} />;
                    })}
            </StTodoWrap>
        </StTodoBoard>
    );
}

export default TodoList;

export const StTodoBoard = styled.div`
    background-color: #fff;
    padding: 30px;
    margin: 20px 0;
    border-radius: 20px;
    box-shadow: rgba(18, 14, 250, 0.1) 2px 4px 10px;
`;
const StBoardTitleH3 = styled.h3`
    font-weight: bold;
    margin-bottom: 20px;
`;
const StTodoWrap = styled.div`
    gap: 1%;
`;
