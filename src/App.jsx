import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Commerical from "./pages/Commercial";
import Residential from "./pages/Residential";
import Header from "./component/Header";
import UniqueFooter from "./component/Footer";
import ProjectDetails from "./component/ProjectDetails";
import ScrollToTop from "./component/ScrollToTop";
import ContactWidget from "./component/ContactWidget";

function App() {
  return (
    <>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/commercial" element={<Commerical />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/project-details/:title" element={<ProjectDetails />} />
      </Routes>
      <ContactWidget/>
      <UniqueFooter />
    </>
  );
}

export default App;
