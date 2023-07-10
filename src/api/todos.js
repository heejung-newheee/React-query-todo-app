import axios from 'axios';
import { useEffect } from 'react';

//조회
const getTodos = async () => {
    const response = await axios.get(`http://localhost:4000/todos`);
    return response.data;
};
// 등록
const addTodo = async (newTodo) => {
    axios.post(`http://localhost:4000/todos`, newTodo);
};
// useEffect(() => {
//     console.log(response.data);
// }, []);

export { getTodos, addTodo };
