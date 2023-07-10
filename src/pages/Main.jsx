import React, { useState } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { StBg } from '../components/Background';
import { styled } from 'styled-components';
import TodoList from '../components/Todo/TodoList';
import InputForm from '../components/Input/InputForm';
import { StRoundBtnSvg } from '../components/Button';

function Main() {
    const [isOpen, setIsOpen] = useState(false);
    const openAddModal = () => {
        setIsOpen(true);
    };
    const closeAddModal = () => {
        setIsOpen((isOpen) => !isOpen);
    };
    return (
        <>
            <StBg>
                <Header />
                <Layout>
                    {/* add 버튼 */}
                    <StAddBtn onClick={openAddModal}>
                        <span>Add Todo</span>
                        <StRoundBtnSvg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                        </StRoundBtnSvg>
                    </StAddBtn>
                    {/* list 영역 */}
                    <TodoList isDone={true} />
                    <TodoList isDone={false} />
                </Layout>
                <Footer />
                {isOpen && <InputForm closeAddModal={closeAddModal} />}
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
