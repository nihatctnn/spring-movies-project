// Import the Axios library
import axios from 'axios';

// Create and export an Axios instance with custom configurations
export default axios.create({
    // Set the base URL for the requests to 'http://localhost:8080'
    baseURL: 'http://localhost:8080',
    
    // Set custom headers for the requests
    headers: {"skip-browser-warning" : "true"}
});
