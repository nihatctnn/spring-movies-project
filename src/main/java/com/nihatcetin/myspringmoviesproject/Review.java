// Import statements for necessary libraries and annotations
package com.nihatcetin.myspringmoviesproject;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

// The @Document annotation specifies that this class represents a MongoDB document
// and the "reviews" string is the name of the collection in the MongoDB database.
@Document(collection = "reviews")
// Lombok annotations to automatically generate boilerplate code (getters, setters, toString, equals, hashCode)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    // The @Id annotation indicates that the id field will be used as the primary identifier in MongoDB
    private ObjectId id;
    // The body field represents the content of the review
    private String body;

    // Constructor with parameters for all fields
    public Review(ObjectId id, String body) {
        this.id = id;
        this.body = body;
    }

    // Constructor with a single parameter for the body field
    public Review(String body) {
        this.body = body;
    }
}
