package com.nihatcetin.myspringmoviesproject;

// Importing necessary classes from Spring and MongoDB libraries.
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

// This annotation marks the interface as a Spring Data repository, allowing Spring to handle the implementation details.
@Repository
// The interface extends MongoRepository, which provides basic CRUD operations for MongoDB and allows querying.
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {

    // This method signature declares a custom query method to find a movie by its IMDb ID.
    // The method name follows the Spring Data JPA naming convention for query methods.
    Optional<Movie> findMovieByImdbId(String imdbId);
}
