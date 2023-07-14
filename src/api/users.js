import axios from 'axios';
// 가입
const register = async (newUser) => {
    console.log(newUser);
    axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, newUser);
};

// 조회
const checkUsers = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`);
    return response.data;
};

// 로그인
const loginUser = async (loginInfo) => {
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/users/${loginInfo.id}`, loginInfo);
    // axios.post(`${process.env.REACT_APP_SERVER_URL}/loginStatus`, loginInfo);
};

export { register, checkUsers, loginUser };
