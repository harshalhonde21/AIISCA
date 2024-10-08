import { Fragment, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Membership from "./Pages/Membership";
import Event from "./Pages/Event";
import Gallery from "./Pages/Gallery";
import "./App.css";
import Manifesto from "./Pages/Manifesto";
import Demands from "./Pages/Demands";
import ParticularEvent from "./Pages/ParticularEvent";
import ParticularBlog from "./Pages/ParticularBlog";
import Reports from "./Pages/Reports";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);

  return (
    <Fragment>
      <Navbar location={location} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/demands" element={<Demands />} />
        <Route path="/event" element={<Event />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reports" element={<Reports />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/event/:id" element={<ParticularEvent />} />
        <Route path="/blog/:id" element={<ParticularBlog />} />
      </Routes>
    </Fragment>
  );
};

export default App;
