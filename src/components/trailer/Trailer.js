// Importing the 'useParams' hook from the 'react-router-dom' library
// and the 'ReactPlayer' component for playing videos.
// Also, importing the styles from the "Trailer.css" file.
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Trailer.css";
import React from "react";

// Functional component named 'Trailer'.
const Trailer = () => {

  // Using the 'useParams' hook to get parameters from the URL.
  let params = useParams();
  
  // Extracting the YouTube trailer ID from the parameters.
  const key = params.ytTrailerId;

  // Rendering a container div for the ReactPlayer component.
  return (
    <div className="react-player-container">

      {/* Checking if the YouTube trailer ID is not null. */}
      {key != null ? (

        // Rendering the ReactPlayer component with controls, autoplay,
        // and the YouTube video URL based on the extracted trailer ID.

        <ReactPlayer
          controls={true}
          playing={true}
          url={`https://www.youtube.com/watch?v=${key}`}
          width="100%"
          height="100%"
        />

      ) : null}

    </div>
  );
};

// Exporting the 'Trailer' component as the default export.
export default Trailer;