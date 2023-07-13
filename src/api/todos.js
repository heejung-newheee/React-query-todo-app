import axios from 'axios';

//조회
const getTodos = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
    return response.data;
};
// 등록
const addTodo = async (newTodo) => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

// 상태변경
const switchTodo = async (id) => {
    const todoData = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
    const thisData = todoData.data;
    const switchData = {
        ...thisData,
        isDone: !thisData.isDone
    };

    axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`, switchData);
};

// 내용수정
const updateTodo = async (updateData) => {
    await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${updateData.id}`, updateData);
};

// 삭제
const deleteTodo = async (id) => {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
};

export { getTodos, addTodo, deleteTodo, switchTodo, updateTodo };
