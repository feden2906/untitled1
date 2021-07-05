import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const getUsers = () => axiosInstance();
const getUsersPost = (id) => axiosInstance('/' + id + '/posts');

export {getUsers, getUsersPost};