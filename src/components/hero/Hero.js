// Importing necessary dependencies and styles
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

// Functional component 'Hero' that takes 'movies' as a prop
const Hero = ({ movies }) => {
    
    // Accessing the navigation functionality from react-router-dom
    const navigate = useNavigate();

    // Function to navigate to the Reviews page for a specific movie
    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`);
    }

    // Rendering the component
    return (
        <div className='movie-carousel-container'>
            {/* Using the Carousel component from react-material-ui-carousel */}
            <Carousel>
                {/* Mapping over the 'movies' prop to create individual movie cards */}
                {
                    movies?.map((movie) => {
                        return (
                            <Paper key={movie.imdbId}>
                                <div className='movie-card-container'>
                                    <div className="movie-card" style={{ "--img": `url(${movie.backdrops[0]})` }}>
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                {/* Displaying the movie poster */}
                                                <img src={movie.poster} alt="" />
                                            </div>
                                            <div className="movie-title">
                                                {/* Displaying the movie title */}
                                                <h4>{movie.title}</h4>
                                            </div>
                                            <div className="movie-buttons-container">
                                                {/* Link to the Trailer page with a play button */}
                                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                    <div className="play-button-icon-container">
                                                        <FontAwesomeIcon className="play-button-icon"
                                                            icon={faCirclePlay}
                                                        />
                                                    </div>
                                                </Link>

                                                {/* Button to navigate to the Reviews page */}
                                                <div className="movie-review-button-container">
                                                    <Button variant="info" onClick={() => reviews(movie.imdbId)}>Reviews</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

// Exporting the 'Hero' component as the default export
export default Hero;
