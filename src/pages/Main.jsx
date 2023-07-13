import React, { useState } from 'react';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { StBg } from '../components/Background';
import { styled } from 'styled-components';
import TodoList from '../components/Todo/TodoList';
import InputForm from '../components/Input/InputForm';
import { StRoundBtnSvg } from '../components/Button';

function Main() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen((isOpen) => !isOpen);
    };
    return (
        <>
            <StBg>
                <Header />
                <Layout>
                    {/* add 버튼 */}
                    <StAddBtn onClick={toggleModal}>
                        <span>Add Todo</span>
                        <StRoundBtnSvg>
                            <img src="/plusIcon.svg" alt="" />
                        </StRoundBtnSvg>
                    </StAddBtn>
                    {/* list 영역 */}
                    <TodoList isDone={true} />
                    <TodoList isDone={false} />
                </Layout>
                <Footer />
                {isOpen && <InputForm toggleModal={toggleModal} />}
            </StBg>
        </>
    );
}

export default Main;

const StAddBtn = styled.span`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    span {
        padding-right: 10px;
    }
`;
