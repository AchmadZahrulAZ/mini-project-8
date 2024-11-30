import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SunIcon from '../assets/icons/Sun.png';
import MoonIcon from '../assets/icons/Moon.png';
import HamburgerIcon from '../assets/icons/Hamburger.png'; // Ikon hamburger (putih)
import HamburgerBlackIcon from '../assets/icons/HamburgerBlack.png'; // Ikon hamburger (hitam)
import CloseIcon from '../assets/icons/Close.png'; // Ikon close untuk hamburger menu

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Untuk mode hamburger

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const root = document.documentElement;

    if (!darkMode) {
      root.classList.add('dark'); // Aktifkan mode gelap
    } else {
      root.classList.remove('dark'); // Kembali ke mode terang
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full flex items-center justify-between px-4 py-2 font-inter 
                  bg-lightmode dark:bg-darkmode transition-all duration-300`}
    >
      {/* Logo */}
      <div className="text-lg font-bold text-black dark:text-white">
        <Link to="/">LumosBlog</Link>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li>
          <Link to="/" className="text-black dark:text-white hover:underline">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-black dark:text-white hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/newsletter" className="text-black dark:text-white hover:underline">
            Newsletter
          </Link>
        </li>
        <li>
          {/* Manual Toggle Switch */}
          <div
            onClick={toggleDarkMode}
            className={`relative w-24 h-10 flex items-center px-2 
                        rounded-full cursor-pointer transition-all duration-300 ${darkMode ? 'bg-lightmode' : 'bg-darkmode'}`}
          >
            {/* Ikon */}
            <img src={darkMode ? MoonIcon : SunIcon} alt="Mode Icon" className={`absolute w-5 h-5 ${darkMode ? 'right-3 text-darkmode' : 'left-3 text-lightmode'}`} />

            {/* Lingkaran */}
            <div className={`absolute w-8 h-8 rounded-full shadow-md transition-all duration-300 ${darkMode ? 'bg-darkmode left-2' : 'bg-lightmode right-2'}`}></div>
          </div>
        </li>
      </ul>

      {/* Hamburger Icon (for mobile view) */}
      <button className="md:hidden p-2 rounded focus:outline-none" onClick={toggleMenu}>
        <img src={darkMode ? HamburgerIcon : HamburgerBlackIcon} alt="Hamburger Menu" className="w-6 h-6" />
      </button>

      {/* Mobile Menu (Hamburger Open) */}
      {isMenuOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-hamburgeropen flex flex-col 
                items-center justify-center space-y-6 z-50 transition-all duration-300`}
        >
          {/* Close Button */}
          <button className="absolute bottom-8 text-2xl font-bold text-white flex justify-center" onClick={toggleMenu}>
            &times;
          </button>
          <p className="text-lg font-bold text-white">Achmad Zahrul Ali Zadan</p>
          <Link to="/" className="text-white text-lg hover:underline" onClick={toggleMenu}>
            Blog
          </Link>
          <Link to="/about" className="text-white text-lg hover:underline" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/newsletter" className="text-white text-lg hover:underline" onClick={toggleMenu}>
            Newsletter
          </Link>

          {/* Manual Toggle Switch */}
          <div
            onClick={toggleDarkMode}
            className={`relative w-24 h-10 flex items-center px-2 
                  rounded-full cursor-pointer transition-all duration-300 ${darkMode ? 'bg-lightmode' : 'bg-darkmode'}`}
          >
            {/* Ikon */}
            <img src={darkMode ? MoonIcon : SunIcon} alt="Mode Icon" className={`absolute w-5 h-5 ${darkMode ? 'right-3 text-darkmode' : 'left-3 text-lightmode'}`} />

            {/* Lingkaran */}
            <div className={`absolute w-8 h-8 rounded-full shadow-md transition-all duration-300 ${darkMode ? 'bg-darkmode left-2' : 'bg-lightmode right-2'}`}></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
