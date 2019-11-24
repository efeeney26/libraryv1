package library.app.controller;

import library.app.entity.Book;
import library.app.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BookController {

	@Autowired
	private BookService bookService;

	@GetMapping("/books")
	public List<Book> getAllBooks(){
		return bookService.getBooks();
	}

	@GetMapping("/books/{id}")
	public Book getBookById(@PathVariable long id) {
		return bookService.getBook(id);
	}

	@PostMapping("/books/add")
	public void addBook(@RequestBody Book book) {
		bookService.saveBook(book);
	}

	@PutMapping("/books/{id}")
	public void updateBookBuId(@RequestBody Book book, @PathVariable long id) {
		bookService.updateBook(book, id);
	}

	@DeleteMapping("/books/{id}")
	public void deleteBookById(@PathVariable long id) {
		bookService.deleteBook(id);
	}
}
