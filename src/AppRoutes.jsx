import React from "react";
import { Route, Routes } from "react-router-dom";

/* components */
import Home from "./components/Home";
import About from "./components/About";
import Jobseekers from "./components/Jobseekers";
import Employers from "./components/Employers";
import Contact from "./components/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/jobseekers" element={<Jobseekers />} />
      <Route path="/employers" element={<Employers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
