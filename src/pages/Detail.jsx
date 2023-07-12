import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { StBg } from '../components/Background';
import { useQuery } from 'react-query';
import { getTodos } from 'api/todos';
import { useLocation } from 'react-router-dom';
import { StTodoBoard } from 'components/Todo/TodoList';

function Detail() {
    const { isLoading, isError, data } = useQuery('todos', getTodos);
    const { state } = useLocation();
    return (
        <>
            <StBg>
                <Header />
                <Layout>
                    <StTodoBoard>
                        {state.id}
                        {state.title}
                        {state.contents}
                        {state.isDone.toString()}
                    </StTodoBoard>
                </Layout>
                <Footer />
            </StBg>
        </>
    );
}

export default Detail;
