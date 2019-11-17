import {
  put, takeEvery, all,
} from 'redux-saga/effects';
import * as actionTypes from '../action_types';
import * as api from '../../api/api';

function* getBooks() {
  const books = yield api.getBooks();

  yield put({ type: actionTypes.BOOKS_RECEIVED, books });
}

function* getBook(action) {
  const { bookId } = action;
  const book = yield api.getBook(bookId);

  yield put({ type: actionTypes.BOOK_RECEIVED, book });
}

function* createBook(action) {
  const { bookInfo } = action;
  const createdBook = yield api.createBook(bookInfo);

  yield put({ type: actionTypes.BOOK_CREATED, createdBook });
}

function* updateBook(action) {
  const { bookInfo, bookId } = action;
  const updatedBook = yield api.updateBook(bookInfo, bookId);

  yield put({ type: actionTypes.BOOK_UPDATED, updatedBook });
}

function* deleteBook(action) {
  const { bookId } = action;
  const deletedBook = yield api.deleteBook(bookId);

  yield put({ type: actionTypes.BOOK_UPDATED, deletedBook });
}

export default function* rootSaga() {
  yield all([
    yield takeEvery(actionTypes.GET_BOOKS, getBooks),
    yield takeEvery(actionTypes.GET_BOOK, getBook),
    yield takeEvery(actionTypes.CREATE_BOOK, createBook),
    yield takeEvery(actionTypes.UPDATE_BOOK, updateBook),
    yield takeEvery(actionTypes.DELETE_BOOK, deleteBook),
  ]);
}
