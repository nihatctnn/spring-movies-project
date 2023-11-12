// Importing necessary dependencies and components
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

// Main App component
function App() {
  // State variables to store movie data and reviews
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  // Function to fetch the list of movies from the API
  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  // Function to fetch data for a specific movie by its ID
  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviews);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect hook to fetch the list of movies when the component mounts
  useEffect(() => {
    getMovies();
  }, [])

  // Render the main structure of the application
  return (
    <div className="App">
      {/* Render the header component */}
      <Header />
      
      {/* Define routes using react-router-dom */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          {/* Render the Home component with the list of movies */}
          <Route path="/" element={<Home movies={movies} />} ></Route>
          
          {/* Render the Trailer component for a specific YouTube trailer ID */}
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          
          {/* Render the Reviews component for a specific movie ID */}
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}></Route>
          
          {/* Render the NotFound component for any unknown routes */}
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

// Export the App component as the default export
export default App;