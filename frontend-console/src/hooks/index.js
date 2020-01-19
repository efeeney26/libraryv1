import useFetch from './useFetch';
import api from '../api/apiAxios';

export default {
  useGetBooks: () => useFetch(api.getBooks, 'books'),
  useGetBook: (id) => useFetch(api.getBook, 'book', id),
};
