import React, { useEffect, useRef, useState } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

// Reviews component receives getMovieData and movie as props
const Reviews = ({ getMovieData, movie }) => {

  // State to manage the reviews
  const [reviews, setReviews] = useState([]);

  // Reference to the review text input
  const revText = useRef();

  // Get the movieId from the route parameters
  let params = useParams();
  const movieId = params.movieId;

  // Fetch movie data when the component mounts
  useEffect(() => {
    getMovieData(movieId);
  }, []);

  // Function to add a new review
  const addReview = async (e) => {
    e.preventDefault();

    // Get the review text from the input reference
    const rev = revText.current;

    try {
      // Send a POST request to add a new review
      const response = await api.post("/api/v1/reviews", {
        reviewBody: rev.value,
        imdbId: movieId,
      });

      // Update the reviews state with the new review
      const updatedReviews = [...reviews, { body: rev.value }];

      // Clear the review text input
      rev.value = "";

      setReviews(updatedReviews);
    } catch (err) {
      console.error(err);
    }
  };

  // Render the component
  return (
    <Container>

      <Row>
        <Col>
          {/* Display the heading for reviews */}
          <h3>Reviews</h3>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col>

          {/* Display the movie poster */}
          <img src={movie?.poster} alt="" />
          
        </Col>

        <Col>

          <>
            {/* Render the ReviewForm component for adding reviews */}
            <Row>

              <Col>
                <ReviewForm
                  handleSubmit={addReview}
                  revText={revText}
                  labelText="Write a Review?"
                />
              </Col>

            </Row>

            <Row>
              <Col>
                <hr />
              </Col>
            </Row>

          </>

          {/* Display existing reviews */}

          {Array.isArray(reviews) &&
            reviews.map((r, index) => (
              <React.Fragment key={index}>
                <Row>
                  <Col>{r.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </React.Fragment>
            ))
          }

        </Col>

      </Row>

      <Row>

        <Col>
          <hr />
        </Col>

      </Row>

    </Container>
  );
};

export default Reviews;
