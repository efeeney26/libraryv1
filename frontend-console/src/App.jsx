import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import BookList from './containers/BookList/BookList';
import BookDescription from './containers/BookDescription/BookDescription';
import AddBook from './containers/AddBook/AddBook';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/books" component={BookList} />
      <Route exact path="/books/add" component={AddBook} />
      <Route exact path="/books/:id" component={BookDescription} />
      <Redirect to="/books" />
    </Switch>
  </BrowserRouter>
);

export default App;
