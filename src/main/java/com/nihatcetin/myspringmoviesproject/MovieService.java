/*
 * This class represents a service layer in a Spring application for managing Movie entities.
 * It is annotated with @Service to indicate that it is a Spring service component.
 */
package com.nihatcetin.myspringmoviesproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    // Autowired annotation is used for automatic injection of the MovieRepository bean.
    @Autowired
    private MovieRepository movieRepository;

    /*
     * This method retrieves a list of all movies from the MovieRepository.
     *
     * @return List<Movie> - a list containing all movies in the repository.
     */
    public List<Movie> allMovies() {
        return movieRepository.findAll();
    }

    /*
     * This method retrieves a single movie based on its IMDb ID from the MovieRepository.
     *
     * @param imdbId - the IMDb ID of the movie to be retrieved.
     * @return Optional<Movie> - an Optional containing the movie with the specified IMDb ID, if present.
     */
    public Optional<Movie> singleMovie(String imdbId) {
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
