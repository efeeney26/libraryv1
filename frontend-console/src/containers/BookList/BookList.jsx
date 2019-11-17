import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getBooksRed } from '../../data/actions';
import Spinner from '../../components/Spinner/Spinner';

import styles from './BookList.module.css';

const BookList = (props) => {
  const {
    history, getBooksRed: getBooks, books, isLoading,
  } = props;
  useEffect(() => {
    getBooks();
  }, []);

  return (
    isLoading ? <Spinner />
      : (
        <>
          <button onClick={() => history.push('/books/add')} className={styles.addButton}>Добавить книгу</button>
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
                    <button onClick={() => history.push(`/books/${book.id}`)}>Открыть</button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </>
      )
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getBooksRed,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
