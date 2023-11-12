// Importing necessary components and styles from external libraries and modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

// Functional component named Header
const Header = () => {
 
  // Returning JSX for the header component
  return (
    // Navbar component with dark background and gold-colored brand
    <Navbar bg="dark" variant="dark" expand="lg">
      {/* Fluid container for responsiveness */}
      <Container fluid>
        {/* Navbar brand with a FontAwesome icon and gold-colored text */}
        <Navbar.Brand href="/" style={{ "color": 'gold' }}>
          <FontAwesomeIcon icon={faVideoSlash} />Gold
        </Navbar.Brand>

        {/* Navbar toggle button for small screens */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Navbar collapse section */}
        <Navbar.Collapse id="navbarScroll">
          {/* Navigation links with a vertical scroll for smaller screens */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* Navigation link to the Home page */}
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            {/* Navigation link to the Watch List page */}
            <NavLink className="nav-link" to="/watchList">
              Watch List
            </NavLink>
          </Nav>

          {/* Login button with outline style */}
          <Button variant="outline-info" className="me-2">
            Login
          </Button>

          {/* Register button with outline style */}
          <Button variant="outline-info">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Exporting the Header component for use in other parts of the application
export default Header;
