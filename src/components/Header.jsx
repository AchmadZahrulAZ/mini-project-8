import React from 'react';

const Header = ({ title }) => {
  return (
    <div className="w-full text-center my-4">
      {/* Garis Atas */}
      <div className="w-full border-t border-black dark:border-white"></div>
      
      {/* Tulisan di Tengah */}
      <h1 className="text-4xl font-bold text-black dark:text-white my-4 uppercase">
        {title}
      </h1>
      
      {/* Garis Bawah */}
      <div className="w-full border-t border-black dark:border-white"></div>
    </div>
  );
};

export default Header;
