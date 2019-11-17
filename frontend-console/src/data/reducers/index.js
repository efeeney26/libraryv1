import * as actionTypes from '../action_types';

const initialState = {
  isLoading: false,
  books: [],
  book: {},
  createdBook: {},
  updatedBook: {},
  deletedBook: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKS:
      return { ...state, isLoading: true };
    case actionTypes.BOOKS_RECEIVED:
      return { books: action.books, isLoading: false };
    case actionTypes.GET_BOOK:
      return { ...state, isLoading: true };
    case actionTypes.BOOK_RECEIVED:
      return { book: action.book, isLoading: false };


    case actionTypes.UPDATE_BOOK:
      return { ...state, isLoading: true };
    case actionTypes.BOOK_UPDATED:
      return { ...state, updatedBook: action.updatedBook, isLoading: false };
    case actionTypes.CREATE_BOOK:
      return { ...state, isLoading: true };
    case actionTypes.BOOK_CREATED:
      return { ...state, createdBook: action.createdBook, isLoading: false };
    case actionTypes.DELETE_BOOK:
      return { ...state, isLoading: true };
    case actionTypes.BOOK_DELETED:
      return { ...state, deletedBook: action.deletedBook, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
