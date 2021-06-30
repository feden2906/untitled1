import axios from 'axios'

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

let getUsers = () => axiosInstance('/users')
let getUsersPost = (id) => axiosInstance('/users/' + id + '/posts' )
let getPosts = () => axiosInstance('/posts')
let getComments = () => axiosInstance('/comments')

export {getUsers, getUsersPost, getPosts, getComments}