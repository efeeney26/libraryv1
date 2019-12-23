package library.app.controller;

import library.app.entity.Book;
import library.app.service.BookService;
import library.app.payload.ResponsePayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BookController {

	private final BookService bookService;

	@Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/books")
    public ResponseEntity<Map<String, List<Book>>> getBooks() {
        return ResponseEntity.ok(bookService.getBooks());
    }

	@GetMapping("/books/{id}")
	public ResponseEntity<Map<String, Book>> getBookById(@PathVariable long id) {
		return ResponseEntity.ok(bookService.getBook(id));
	}

	@PostMapping("/books/add")
	public ResponseEntity<Map<String, String>> addBook(@RequestBody Map<String, Book> reqBook) {
	    Book book = reqBook.get("book");
		bookService.saveBook(book);
		ResponsePayload responsePayload = new ResponsePayload("Книга добавлена!");
		return ResponseEntity.ok(responsePayload.getPayload());
	}

	@PutMapping("/books/{id}")
	public ResponseEntity<Map<String, String>> updateBookBuId(@RequestBody Map<String, Book> reqBook, @PathVariable long id) {
		Book book = reqBook.get("book");
	    bookService.updateBook(book, id);
	    ResponsePayload responsePayload = new ResponsePayload("Книга обновлена");
	    return ResponseEntity.ok(responsePayload.getPayload());
	}

	@DeleteMapping("/books/{id}")
	public ResponseEntity<Map<String, String>> deleteBookById(@PathVariable long id) {
		bookService.deleteBook(id);
		ResponsePayload responsePayload = new ResponsePayload("Книга удалена!");
		return ResponseEntity.ok(responsePayload.getPayload());
	}
}
