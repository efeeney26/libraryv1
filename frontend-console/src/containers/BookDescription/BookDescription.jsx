import React, {useState, useEffect, Fragment} from 'react';
import {getBook, deleteBook, updateBook} from "../../api/api";
import styles from './BookDescription.module.css'

const BookDescription = (props) => {
	const {match: {params}, history} = props;
	const parseId = parseInt(params.id, 10);


	const [book, setBook] = useState({});
	const [isLoading, setLoading] = useState(false);
	const [isEdit, setEdit] = useState(false);
	useEffect(() => {
		setLoading(true);
		getBook(parseId)
			.then((data) => {
				setBook(data);
				setLoading(false);
			})
			.catch((err) => {
				alert(`Something went wrong ${err.stack}`);
				setLoading(false);
			})
	}, [parseId]);

	const handleDelete = () => {
		deleteBook(parseId)
			.then(() => {
				alert('Good stuff');
				history.goBack();
			})
			.catch(() => alert('Zaebal!'))
	};

	const handleChange = (e) => {
		const {target} = e;
		const {value, name} = target;
		let updatedBook = {...book};
		updatedBook[name] = value;
		setBook(updatedBook);
	};

	const handleSubmit = (e) => {
		e.preventDefault();// todo fix this
		updateBook(book, parseId)
			.then(() => {
				alert('good shit!');
				setEdit(false);
			})
			.catch(() => alert('GOVNO!'))
	};

	if(isLoading)
		return <div>Waiting...</div>;

	return (
			(!isEdit ? (
				<Fragment>
					<button className={styles.deleteButton} onClick={handleDelete}>Удалить</button>
					<br/><br/>
					<table cellSpacing={0}>
						<thead>
						<tr>
							<th>Название</th>
							<th>Автор</th>
							<th>Жанр</th>
							<th>Описание</th>
						</tr>
						</thead>
						<tbody key={book.id}>
						<tr>
							<td>{book.name}</td>
							<td>{book.author}</td>
							<td>{book.genre}</td>
							<td>{book.description}</td>
						</tr>
						</tbody>
					</table>
					<button onClick={() => setEdit(true)}>Редактировать</button>
				</Fragment>
			) : (
				<Fragment>
					<button className={styles.deleteButton} onClick={handleDelete}>Удалить</button>
					<br/><br/>
					<form onSubmit={handleSubmit}>
						<input type="text" value={book.name} onChange={handleChange} name="name"/>
						<br/><br/>
						<input type="text" value={book.author} onChange={handleChange} name="author"/>
						<br/><br/>
						<input type="text" value={book.genre} onChange={handleChange} name="genre"/>
						<br/><br/>
						<textarea cols={100} rows={10} value={book.description} onChange={handleChange} name="description" />
						<br/><br/>
						<button>Сохранить изменения</button>
					</form>
				</Fragment>
	)))
};

export default BookDescription;
