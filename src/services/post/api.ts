import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
  },
});

export const getPosts = () => api.get('/posts').then((res) => res.data);

export const updatePosts = async (n: number) => await api.get(`/posts?_page=${n}&_limit=10`).then((res) => res.data);

export const getPost = async (id: string) => await api.get(`/posts/${id}`).then((res) => res.data);
