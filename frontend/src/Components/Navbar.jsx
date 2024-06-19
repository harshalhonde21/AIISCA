import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types"; 
import "./Navbar.css";

const Navbar = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <nav className="navbar-container">
        <div className="logo-container">
          <img src="logo2.png" alt="Your Logo" className="logo" />
        </div>
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link onClick={toggleMenu} to="/">Home</Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link onClick={toggleMenu} to="/about">About Us</Link>
            </li>
            <li className={location.pathname === "/manifesto" ? "active" : ""}>
              <Link onClick={toggleMenu} to="/manifesto">AIISCA Manifesto</Link>
            </li>
            <li className={location.pathname === "/demands" ? "active" : ""}>
              <Link onClick={toggleMenu} to="/demands">AIISCA Demands</Link>
            </li>
            <li className={location.pathname === "/event" ? "active" : ""}>
              <Link onClick={toggleMenu} to="/event">Event</Link>
            </li>
            <li className={location.pathname === "/gallery" ? "active" : ""}>
              <Link onClick={toggleMenu} to="/gallery">Gallery</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link onClick={toggleMenu} to="/contact">Contact Us</Link>
            </li>
            <li className={location.pathname === "/membership" ? "active" : ""}>
              <Link onClick={toggleMenu} to="/membership">Membership</Link>
            </li>
            <li className={location.pathname === "/blog" ? "active" : ""}>
              <Link onClick={toggleMenu} to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default Navbar;
