package com.nihatcetin.myspringmoviesproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/movies")
public class MovieController {

    // Autowired annotation is used for automatic injection of MovieService bean.
    @Autowired
    private MovieService movieService;

    // Handles HTTP GET requests to retrieve all movies.
    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies(){
        // Returns a ResponseEntity with a list of movies and HTTP status OK.
        return new ResponseEntity<List<Movie>>(movieService.allMovies(), HttpStatus.OK);
    }

    // Handles HTTP GET requests to retrieve a single movie based on its IMDB ID.
    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdbId){
        // Returns a ResponseEntity with an Optional containing a single movie and HTTP status OK.
        return new ResponseEntity<Optional<Movie>>(movieService.singleMovie(imdbId), HttpStatus.OK);
    }
}
