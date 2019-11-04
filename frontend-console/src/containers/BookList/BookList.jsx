import React, {useEffect, useState, Fragment} from 'react';
import {connect} from 'react-redux'

import { getBooksRed } from "../../data/actions";
import Spinner from "../Spinner/Spinner";

import styles from './BookList.module.css';

const BookList = (props) => {
	const { history, getBooksRed, books, loading } = props
	useEffect(() => {
		getBooksRed()
	}, [])

	return (
		loading ? <Spinner/> :
		<Fragment>
			<button onClick={() => history.push('/books/add')} className={styles.addButton}>Добавить книгу</button>
			<br/>
			<table cellSpacing={0}>
				<thead>
				<tr>
					<th>Id</th>
					<th>Название</th>
					<th>Автор</th>
					<th>Жанр</th>
					<th>Описание</th>
					<th>Книга</th>
				</tr>
				</thead>
				{books.map((book) => {
					return (
						<tbody key={book.id}>
						<tr>
							<td>{book.id}</td>
							<td>{book.name}</td>
							<td>{book.author}</td>
							<td>{book.genre}</td>
							<td>{book.description}</td>
							<td>
								<button onClick={() => history.push(`/books/${book.id}`)}>Открыть</button>
							</td>
						</tr>
						</tbody>
					)
				})}
			</table>
		</Fragment>
	)
};

const mapStateToProps = (state) => ({
		books: state.books,
		loading: state.loading
})

const mapDispatchToProps = {
	getBooksRed
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
