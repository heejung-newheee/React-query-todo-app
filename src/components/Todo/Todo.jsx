import React from 'react';
import { styled } from 'styled-components';

function Todo({ item }) {
    return (
        <>
            <StTodo>
                <StCheckBox className="checkbox unchecked">
                    <StCheckSvg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                    </StCheckSvg>
                </StCheckBox>
                <StCheckBox className="checkbox checked">
                    <StCheckSvg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </StCheckSvg>
                </StCheckBox>
                <StContentArea>
                    <StTodoTitleH5>{item.title}</StTodoTitleH5>
                    <StTodoContents>{item.contents}</StTodoContents>
                </StContentArea>
                <StEditArea>
                    <a href="">
                        <StDelSvg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                        </StDelSvg>
                    </a>
                </StEditArea>
            </StTodo>
        </>
    );
}

export default Todo;

const StTodo = styled.div`
    display: flex;
    border: solid 3px #b1c6fd;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
`;
const StCheckBox = styled.div`
    width: 5%;
    cursor: pointer;
`;
const StCheckSvg = styled.svg`
    fill: #b1c6fd;
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
const StDelSvg = styled.svg`
    fill: #b1c6fd;
`;
