import React, { useState } from 'react';
import PropTypes from 'prop-types';

import api from '../../api/apiAxios';

const AddBook = (props) => {
  const { history } = props;
  const emptyItem = {
    name: '',
    author: '',
    genre: '',
    description: '',
  };

  const [data, setData] = useState(emptyItem);

  const handleChange = (e) => {
    const { target } = e;
    const { value, name } = target;
    const item = { ...data };
    item[name] = value;
    setData(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.addBook(data)
      .then((res) => {
        const { data: { message } } = res;
        alert(message);
        history.goBack();
      })
      .catch((error) => alert(`Something goes wrong ${error.stackTrace}`));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={data.name} onChange={handleChange} name="name" />
      <br />
      <br />
      <input type="text" value={data.author} onChange={handleChange} name="author" />
      <br />
      <br />
      <input type="text" value={data.genre} onChange={handleChange} name="genre" />
      <br />
      <br />
      <textarea cols={100} rows={10} value={data.description} onChange={handleChange} name="description" />
      <br />
      <br />
      <button type="submit">Добавить книгу</button>
    </form>
  );
};

AddBook.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default AddBook;
