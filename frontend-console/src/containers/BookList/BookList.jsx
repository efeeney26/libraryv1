import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import useApi from '../../hooks';

import styles from './BookList.module.css';

const BookList = () => {
  const history = useHistory();
  const [books, isLoading] = useApi.useGetBooks();

  if (isLoading) return <div>...Waiting</div>;

  return (
    <>
      <button type="button" onClick={() => history.push('/books/add')} className={styles.addButton}>Добавить книгу</button>
      <br />
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Название</th>
            <th>Автор</th>
            <th>Жанр</th>
            <th>Описание</th>
            <th>Книга</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.description}</td>
              <td>
                <button type="button" onClick={() => history.push(`/books/${book.id}`)}>Открыть</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

BookList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default BookList;
