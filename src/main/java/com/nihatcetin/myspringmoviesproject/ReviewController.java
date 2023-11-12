package com.nihatcetin.myspringmoviesproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

// Declare the class as a REST controller, allowing it to handle HTTP requests
@RestController

// Enable Cross-Origin Resource Sharing (CORS) for requests from http://localhost:3000
@CrossOrigin(origins = "http://localhost:3000")

// Define the base request mapping for this controller
@RequestMapping("/api/v1/reviews")
public class ReviewController {

    // Inject an instance of ReviewService using the @Autowired annotation
    @Autowired
    private ReviewService reviewService;

    // Handle HTTP POST requests to create a new review
    @PostMapping

    // Define the method to create a review, taking a JSON payload as a Map
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {

        // Call the createReview method in the ReviewService, passing reviewBody and imdbId from the payload
        // Return a ResponseEntity with the created Review and HTTP status code 201 (CREATED)
        return new ResponseEntity<Review>(
                reviewService.createReview(payload.get("reviewBody"), payload.get("imdbId")),
                HttpStatus.CREATED
        );
    }
}