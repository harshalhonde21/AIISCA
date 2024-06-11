import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFail, setIsLoginFalse } from "../slices/userSlice.js";
import { isLogin } from "../actions/userAction.js";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./Profile.css";

const Profile = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(isLogin());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(loginFail());
    dispatch(setIsLoginFalse());
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Successfully Logout!");
  };

  return (
    <Fragment>
      <div className="profile-container">
        <div className="navbar-logo">
        <h1>Profile</h1>
          <Link to="/addblog" style={{display:"flex",
           justifyContent:"center", alignItems:"center"}} className="logo-link">
            <img src="/images/Logo.png" alt="Logo" />
          </Link>
        </div>
        <div>
          <p className="profile-info">
            <strong>Username:</strong> {user && user.name}
          </p>
          <p className="profile-info">
            <strong>Email:</strong> {user && user.email}
          </p>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </Fragment>
  );
});

Profile.displayName = "Profile";

export default Profile;
