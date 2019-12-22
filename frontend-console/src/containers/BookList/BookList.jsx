import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '../../api/apiAxios';
import styles from './BookList.module.css';

const BookList = (props) => {
  const { history } = props;
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    api.getBooks()
      .then((res) => {
        const { data } = res;
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        alert(`Something went wrong ${err.stack}`);
        setLoading(false);
      });
  }, []);

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
        {books.map((book) => (
          <tbody key={book.id}>
            <tr>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.description}</td>
              <td>
                <button type="button" onClick={() => history.push(`/books/${book.id}`)}>Открыть</button>
              </td>
            </tr>
          </tbody>
        ))}
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
