import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Emissions from "./Emissions";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/emissions" element={<Emissions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
