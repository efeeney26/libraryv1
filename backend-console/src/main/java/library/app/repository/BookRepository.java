package library.app.repository;

import library.app.entity.Book;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

    @Query(value = "select * from library order by id", nativeQuery = true)
    List<Book> findAllBooks();

    @Query(value = "select * from library where id = :id", nativeQuery = true)
    Book findBook(Long id);

	List<Book> findAllByOrderByIdAsc();
}
