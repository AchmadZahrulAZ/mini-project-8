import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Newsletter from "./pages/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div
      className="min-h-screen bg-lightmode dark:bg-darkmode text-fonttext dark:text-lightmode transition-colors duration-300"
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
