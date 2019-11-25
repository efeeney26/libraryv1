export async function getBooks() {
  const response = await fetch('/api/books');
  return await response.json();
}

export async function getBook(id) {
  const response = await fetch(`/api/books/${id}`);
  return await response.json();
}

export async function addBook(bookInfo) {
  return await fetch('/api/books/add', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookInfo),
  });
}

export async function updateBook(bookInfo, id) {
  return await fetch(`/api/books/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookInfo),
  });
}

export async function deleteBook(id) {
  return await fetch(`/api/books/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
