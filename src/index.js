// Import necessary dependencies from React and other libraries
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; 
import App from "./App"; 
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import necessary components from React Router

// Create a root using ReactDOM.createRoot and specify the root element with the id "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the React application inside the root element
root.render(

  <React.StrictMode>

    {/* Use BrowserRouter for client-side routing */}
    <BrowserRouter>

      {/* Define routes using the Routes component */}
      <Routes>

        {/* Specify a route with a path "/*" that renders the App component */}
        <Route path="/*" element={<App />} />

      </Routes>

    </BrowserRouter>
    
  </React.StrictMode>
);
