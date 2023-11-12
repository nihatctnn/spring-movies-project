// This package statement declares the package for the Java class.
package com.nihatcetin.myspringmoviesproject;

// Lombok annotations to automatically generate boilerplate code.
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// MongoDB's annotations for mapping the class to a MongoDB document.
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

// Java utility to work with lists.
import java.util.List;

// This annotation indicates that instances of this class will be stored as documents in the "movies" collection in MongoDB.
@Document(collection = "movies")
// Lombok's annotations to generate constructor, getter, setter, and toString methods.
@Data
@AllArgsConstructor
@NoArgsConstructor
// The Movie class represents a movie entity in the application.
public class Movie {

    // MongoDB annotation to mark this field as the document identifier.
    @Id
    private ObjectId id;

    // Fields representing various attributes of a movie.
    private String imdbId;        // IMDB identifier of the movie.
    private String title;         // Title of the movie.
    private String releaseDate;   // Release date of the movie.
    private String trailerLink;   // Link to the movie trailer.
    private String poster;        // Link to the movie poster.
    private List<String> genres;   // List of genres associated with the movie.
    private List<String> backdrops; // List of backdrop images for the movie.

    // MongoDB annotation to store references to Review documents associated with this movie.
    @DocumentReference
    private List<Review> reviewIds; // List of review IDs associated with the movie.

}