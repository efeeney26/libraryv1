package library.app.service;

import library.app.entity.Book;
import library.app.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.util.List;

@Service
public class BookService {

	@Autowired
	private BookRepository bookRepository;

	public List<Book> getBooks() {
		return bookRepository.findAllByOrderByIdAsc();
	}

	public Book getBook(long id) {
		return bookRepository.getOne(id);
	}

	public void saveBook(Book book) {
		bookRepository.save(book);
	}

	public void updateBook(@NotNull Book book, long id) {
		Book updatedBook = getBook(id);
		updatedBook.setName(book.getName());
		updatedBook.setAuthor(book.getAuthor());
		updatedBook.setGenre(book.getGenre());
		updatedBook.setDescription(book.getDescription());
		bookRepository.save(updatedBook);
	}

	public void deleteBook(long id) {
		bookRepository.deleteById(id);
	}
}
