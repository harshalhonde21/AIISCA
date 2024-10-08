import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBlogForm from "./pages/AddBlogForm";
import AddEventForm from "./pages/AddEventForm";
import AddImage from "./pages/AddImage";
import MembershipTable from "./pages/MembershipTable";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "./actions/userAction";
import { setIsLoginFalse } from "./slices/userSlice";
import Loader from "./components/Loader";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";
import AllBlogs from "./pages/AllBlogs";
import AllEvents from "./pages/AllEvents";
import AllImages from "./pages/AllImages";
import AllReports from "./pages/AllReports";
import AddReport from "./pages/AddReport"

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
          path="/allblogs"
          element={isAuthenticated ? <AllBlogs /> : <Navigate to="/" />}
        />

        <Route
          path="/addEvent"
          element={isAuthenticated ? <AddEventForm /> : <Navigate to="/" />}
        />

        <Route
          path="/allevents"
          element={isAuthenticated ? <AllEvents /> : <Navigate to="/" />}
        />

        <Route
          path="/addimage"
          element={isAuthenticated ? <AddImage /> : <Navigate to="/" />}
        />

        <Route
          path="/allimages"
          element={isAuthenticated ? <AllImages /> : <Navigate to="/" />}
        />
        <Route
          path="/addReport"
          element={isAuthenticated ? <AddReport /> : <Navigate to="/" />}
          // element={<AddReport />}
        />
        <Route
          path="/allReports"
          element={isAuthenticated ? <AllReports /> : <Navigate to="/" />}
          // element={<AllReports />}

        />
        <Route
          path="/membershiptable"
          element={isAuthenticated ? <MembershipTable /> : <Navigate to="/" />}
        />
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
