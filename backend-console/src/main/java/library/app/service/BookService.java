package library.app.service;

import library.app.entity.Book;
import library.app.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.util.*;

@Service
public class BookService {

    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Map<String, List<Book>> getBooks() {
        List<Book> bookList = bookRepository.findAllBooks();
        return Collections.singletonMap("books", bookList);
    }

	public Map<String, Book> getBook(long id) {
		Book book = bookRepository.findBook(id);
		return Collections.singletonMap("book", book);
	}

	public void saveBook(Book book) {
		bookRepository.save(book);
	}

	public void updateBook(@NotNull Book book, long id) {
		Book updatedBook = bookRepository.findBook(id);
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
