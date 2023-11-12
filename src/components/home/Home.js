// Importing the 'Hero' component from the '../hero/Hero' file
import Hero from '../hero/Hero';

// Defining a functional component called 'Home' that takes a 'movies' prop
const Home = ({movies}) => {
  return (
    // Rendering a div element
    <div>
      {/* Rendering the 'Hero' component and passing the 'movies' prop to it */}
      <Hero movies={movies} />
    </div>
  );
}

// Exporting the 'Home' component as the default export
export default Home;
