import React from 'react';
import { styled } from 'styled-components';
import Todo from './Todo';
import { useQuery } from 'react-query';
import { getTodos } from '../../api/todos';

function TodoList({ isDone }) {
    const { isLoaing, isError, data } = useQuery('todos', getTodos);
    return (
        <StTodoBoard>
            <StBoardTitleH3>{isDone ? 'To do' : 'Done'}</StBoardTitleH3>
            {console.log(data)}
            <StTodoWrap>
                {data
                    .filter((item) => item.isDone === !isDone)
                    .map((item) => {
                        return <Todo key={item.id} item={item} />;
                    })}
            </StTodoWrap>
        </StTodoBoard>
    );
}

export default TodoList;

const StTodoBoard = styled.div`
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
