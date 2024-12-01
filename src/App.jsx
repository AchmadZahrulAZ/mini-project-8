import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import About from './pages/About';
import Newsletter from './pages/Newsletter';
import BlogDetail from './pages/BlogDetail'; // Import BlogDetail

const App = () => {
  return (
    <div className="pt-14 bg-lightmode dark:bg-darkmode transition-colors duration-300">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/blog/:id" element={<BlogDetail />} /> {/* Tambahkan route detail */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
