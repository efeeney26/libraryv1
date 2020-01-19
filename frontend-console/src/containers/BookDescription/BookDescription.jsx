import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../api/apiAxios';
import useApi from '../../hooks';
import styles from './BookDescription.module.css';

const BookDescription = () => {
  const history = useHistory();
  const { id } = useParams();
  const [initData, initLoading] = useApi.useGetBook(id);
  const [book, setBook] = useState({});
  useEffect(() => {
    if (initData) {
      setBook(initData);
    }
  }, [initData]);
  const [isLoading, setLoading] = useState(null);
  useEffect(() => {
    setLoading(initLoading);
  }, [initLoading]);
  const [isEdit, setEdit] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    api.deleteBook(id)
      .then((res) => {
        const { data: { message } } = res;
        alert(message);
        history.goBack();
      })
      .catch((e) => alert(`Something goes wrong ${e.stackTrace}`))
      .finally(() => setLoading(false));
  };

  const handleChange = (e) => {
    const { target } = e;
    const { value, name } = target;
    const updatedBook = { ...book };
    updatedBook[name] = value;
    setBook(updatedBook);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api.updateBook(book, id)
      .then((res) => {
        const { data: { message } } = res;
        alert(message);
        setEdit(false);
      })
      .catch((err) => alert(`Something goes wrong ${err.stackTrace}`))
      .finally(() => setLoading(false));
  };

  if (isLoading) return <div>Waiting...</div>;

  return (
    (!isEdit ? (
      <>
        <button type="button" className={styles.deleteButton} onClick={handleDelete}>Удалить</button>
        <br />
        <br />
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th>Название</th>
              <th>Автор</th>
              <th>Жанр</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody key={book.id}>
            <tr>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.description}</td>
            </tr>
          </tbody>
        </table>
        <button type="button" onClick={() => setEdit(true)}>Редактировать</button>
      </>
    ) : (
      <>
        <button type="button" className={styles.deleteButton} onClick={handleDelete}>Удалить</button>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <input type="text" value={book.name} onChange={handleChange} name="name" />
          <br />
          <br />
          <input type="text" value={book.author} onChange={handleChange} name="author" />
          <br />
          <br />
          <input type="text" value={book.genre} onChange={handleChange} name="genre" />
          <br />
          <br />
          <textarea cols={100} rows={10} value={book.description} onChange={handleChange} name="description" />
          <br />
          <br />
          <button type="submit">Сохранить изменения</button>
        </form>
      </>
    )));
};

BookDescription.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default BookDescription;
