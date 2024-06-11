import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <div className="navbar-logo">
          <Link to="/addblog" className="logo-link" onClick={closeSidebar}>
            <img src="/images/Logo.png" alt="Logo" />
          </Link>
        </div> */}
        <div className="navbar-items">
          <NavLink
            to="/addblog"
            className="navbar-item"
            style={{
              borderBottom:
                location.pathname === "/home" ? "2px solid white" : "none",
            }}
            onClick={closeSidebar}
          >
            Add Blog
          </NavLink>

          <NavLink
            to="/allblogs"
            className="navbar-item"
            style={{
              borderBottom:
                location.pathname === "/allblogs" ? "2px solid white" : "none",
            }}
            onClick={closeSidebar}
          >
            All Blog
          </NavLink>

          <NavLink
            to="/allevents"
            className="navbar-item"
            style={{
              borderBottom:
                location.pathname === "/allevents" ? "2px solid white" : "none",
            }}
            onClick={closeSidebar}
          >
            All Events
          </NavLink>

          <NavLink
            to="/addevent"
            className="navbar-item"
            style={{
              borderBottom:
                location.pathname === "/events" ? "2px solid white" : "none",
            }}
            onClick={closeSidebar}
          >
            Add Event
          </NavLink>
          <NavLink
            to="/addimage"
            className="navbar-item"
            style={{
              borderBottom:
                location.pathname === "/leaderboard"
                  ? "2px solid white"
                  : "none",
            }}
            onClick={closeSidebar}
          >
            Add Image
          </NavLink>

          <NavLink
            to="/allimages"
            className="navbar-item"
            style={{
              borderBottom:
                location.pathname === "/allimages"
                  ? "2px solid white"
                  : "none",
            }}
            onClick={closeSidebar}
          >
            All Image
          </NavLink>
          <NavLink
          to="/membershiptable"
          className="navbar-item"
          style={{
            borderBottom:
              location.pathname === "/membershiptable" ? "2px solid white" : "none",
          }}
          onClick={closeSidebar}
          >
          Membership Table
          </NavLink>
          {isAuthenticated && (<NavLink
            to="/profile"
            className="navbar-item"
            style={{
              borderBottom:
                location.pathname === "/about" ? "2px solid white" : "none",
            }}
            onClick={closeSidebar}
          >
            Profile
          </NavLink>)}
        </div>
        <div className="navbar-icon" onClick={toggleSidebar}>
          {showSidebar ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {showSidebar && (
        <div className="sidebar">
          <div className="sidebar-items">
            <NavLink to="/addblog" className="sidebar-item" onClick={closeSidebar}>
              Add Blog
            </NavLink>
            <NavLink
              to="/addevent"
              className="sidebar-item"
              onClick={closeSidebar}
            >
              Add Event
            </NavLink>
            <NavLink
              to="/addimage"
              className="sidebar-item"
              onClick={closeSidebar}
            >
              Add Image
            </NavLink>
            <NavLink
              to="/contacttable"
              className="sidebar-item"
              onClick={closeSidebar}
            >
              Contact Table
            </NavLink>
            <NavLink
              to="/membershiptable"
              className="sidebar-item"
              onClick={closeSidebar}
            >
              Membership Table
            </NavLink>
            {isAuthenticated && (<NavLink
              to="/profile"
              className="sidebar-item"
              onClick={closeSidebar}
            >
              Profile
            </NavLink>)}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;