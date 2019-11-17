import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../../components/Spinner/Spinner';
import {
  getBookRed, deleteBookRed, createBookRed, updateBookRed,
} from '../../data/actions';

import styles from './BookDescription.module.css';

const BookDescription = (props) => {
  const {
    match: { params }, history, getBookRed: getBook, deleteBookRed: deleteBook, createBookRed: createBook, updateBookRed: updateBook, isLoading, book,
  } = props;
  const parseId = parseInt(params.id, 10);
  useEffect(() => {
    getBook(parseId);
  }, []);

  const [updatedBook, setBook] = useState({});
  const [isEdit, setEdit] = useState(false);

  const handleDelete = () => {
    deleteBook(parseId)
      .then(() => {
        alert('Nice!');
        history.goBack();
      })
      .catch(() => alert('Error!'));
  };

  const handleChange = (e) => {
    const { target } = e;
    const { value, name } = target;
    const updatedBook1 = { ...book };
    updatedBook1[name] = value;
    setBook(updatedBook1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(updatedBook, parseId)
      .then(() => {
        alert('NICE!');
        setEdit(false);
      })
      .catch(() => alert('ERROR!'));
  };

  if (isLoading) return <Spinner />;

  return (
    (!isEdit ? (
      <>
        <button className={styles.deleteButton} onClick={handleDelete}>Удалить</button>
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
        <button onClick={() => setEdit(true)}>Редактировать</button>
      </>
    ) : (
      <>
        <button className={styles.deleteButton} onClick={handleDelete}>Удалить</button>
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
          <button>Сохранить изменения</button>
        </form>
      </>
    )));
};

const mapStateToProps = (state) => ({
  book: state.book,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getBookRed,
  deleteBookRed,
  createBookRed,
  updateBookRed,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(BookDescription);
