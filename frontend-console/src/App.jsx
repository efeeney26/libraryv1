import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { Routes } from './routes';
import { BookList, BookDescription, AddBook } from './containers';
import { withSchemeHOC } from "./HOC's";
import { bookListScheme } from './schemes';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={Routes.BOOKS} component={withSchemeHOC(BookList, bookListScheme)} />
      <Route exact path={Routes.BOOK_ADD} component={AddBook} />
      <Route exact path={Routes.BOOK} component={BookDescription} />
      <Redirect to={Routes.BOOKS} />
    </Switch>
  </BrowserRouter>
);

export default App;
