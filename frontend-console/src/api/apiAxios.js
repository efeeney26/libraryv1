import axios from 'axios';
import axiosConf from './constants';


const axiosInstance = axios.create({
  ...axiosConf.defaultAxiosConfig,
});

axiosInstance.interceptors.request.use((config) => config,
  (error) => Promise.reject(error));

axiosInstance.interceptors.response.use((response) => response,
  (error) => Promise.reject(error));

export default {
  getBooks: () => axiosInstance.get(''),
  getBook: (id) => axiosInstance.get(`/${id}`),
  addBook: (book) => axiosInstance.post('/add', { ...book }),
  deleteBook: (id) => axiosInstance.delete(`/${id}`),
  updateBook: (book, id) => axiosInstance.put(`/${id}`, { ...book }),
};
