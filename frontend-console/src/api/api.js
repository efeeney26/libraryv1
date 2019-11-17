export const getBooks = async () => {
  try {
    const response = await fetch('/api/books');
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export const getBook = async (id) => {
  try {
    const response = await fetch(`/api/books/${id}`);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export const createBook = async (bookInfo) => {
  try {
    return await fetch('/api/books/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookInfo),
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateBook = async (bookInfo, id) => {
  try {
    return await fetch(`/api/books/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookInfo),
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteBook = async (id) => {
  try {
    return await fetch(`/api/books/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    console.log(e);
  }
};
