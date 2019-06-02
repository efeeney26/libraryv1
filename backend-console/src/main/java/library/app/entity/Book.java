package library.app.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "library")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)//todo need optimization
	@Column(name = "id")
	private long id;
	@Column(name = "name")
	private String name;
	@Column(name = "author")
	private String author;
	@Column(name = "genre")
	private String genre;
	@Column(name = "description")
	private String description;
}
