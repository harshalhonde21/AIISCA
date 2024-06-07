import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBlogForm from "./pages/AddBlogForm";
import AddEventForm from "./pages/AddEventForm";
import AddImage from "./pages/AddImage";
import ContactTable from "./pages/ContactTable";
import MembershipTable from "./pages/MembershipTable";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "./actions/userAction";
import { setIsLoginFalse } from "./slices/userSlice";
import Loader from "./components/Loader";
import Profile from "./pages/Profile";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const token = localStorage.getItem("token");
    if (token) {
      dispatch(isLogin()).finally(() => setLoading(false));
    } else {
      dispatch(setIsLoginFalse());
      setLoading(false);
    }
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Routes>
      <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/addblog" /> : <Login />}
        />
        <Route
          path="/addblog"
          element={isAuthenticated ? <AddBlogForm /> : <Navigate to="/" />}
        />
        {isAuthenticated && <Route path="/profile" element={<Profile />} />}
        <Route
          path="/addEvent"
          element={isAuthenticated ? <AddEventForm /> : <Navigate to="/" />}
        />
        <Route
          path="/addimage"
          element={isAuthenticated ? <AddImage /> : <Navigate to="/" />}
        />
        <Route 
          path="/contacttable" 
          element={isAuthenticated ? <ContactTable /> : <Navigate to="/" />}
        />
        <Route
          path="/membershiptable"
          element={isAuthenticated ? <MembershipTable /> : <Navigate to="/" />}
        />          
      </Routes>
    </>
  );
}

export default App;
