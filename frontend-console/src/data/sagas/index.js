import { put, call, takeLatest, all } from 'redux-saga/effects'
import {getBooks} from "../../api/api";

function* fetchBooks() {
    const books = yield fetch('/api/books')
        .then(res =>  res.json());

    yield put({ type: "BOOKS_RECEIVED", books });
}

function* actionWatcher() {
    yield takeLatest('GET_BOOKS', fetchBooks)
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ])
}
