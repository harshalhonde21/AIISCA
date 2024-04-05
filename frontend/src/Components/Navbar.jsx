import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
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
          <img src="logo.png" alt="Your Logo" className="logo" />
        </div>
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About Us</Link>
            </li>
            <li className={location.pathname === "/event" ? "active" : ""}>
              <Link to="/event">Event</Link>
            </li>
            <li className={location.pathname === "/gallery" ? "active" : ""}>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className={location.pathname === "/membership" ? "active" : ""}>
              <Link to="/membership">Membership</Link>
            </li>
            <li className={location.pathname === "/blog" ? "active" : ""}>
              <Link to="/blog">Blog</Link>
            </li>
            <li className={location.pathname === "/donate" ? "active" : ""}>
              <Link to="/donate">Donate Us</Link>
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

export default Navbar;
