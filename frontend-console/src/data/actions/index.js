import * as actionTypes from '../action_types';

export const getBooksRed = () => ({
  type: actionTypes.GET_BOOKS,
});

export const getBookRed = (bookId) => ({
  type: actionTypes.GET_BOOK,
  bookId,
});

export const createBookRed = (book) => ({
  type: actionTypes.CREATE_BOOK,
  book,
});

export const updateBookRed = (book, bookId) => ({
  type: actionTypes.UPDATE_BOOK,
  book,
  bookId,
});

export const deleteBookRed = (bookId) => ({
  type: actionTypes.DELETE_BOOK,
  bookId,
});
