package com.nihatcetin.myspringmoviesproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    // Autowiring ReviewRepository and MongoTemplate for dependency injection
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    // Method to create a new review for a movie
    public Review createReview(String reviewBody, String imdbId) {
        // Create a new Review object and insert it into the database using ReviewRepository
        Review review = reviewRepository.insert(new Review(reviewBody));

        // Update the Movie document by adding the new review's ID to the "reviewIds" array
        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId)) // Find the movie with the specified IMDb ID
                .apply(new Update().push("reviewIds").value(review)) // Add the review ID to the "reviewIds" array
                .first();

        // Return the created review
        return review;
    }
}