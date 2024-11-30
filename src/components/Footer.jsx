import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-lightmode dark:bg-darkmode py-4 px-6">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-start md:space-x-4 text-sm text-black dark:text-white">
        {/* Tulisan "© 2024" untuk Mode Desktop */}
        <div className="hidden md:block text-left">
          © 2024
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 text-center md:text-left mt-4 md:mt-0">
          <a href="https://twitter.com" className="hover:underline mt-2 md:mt-0">
            Twitter
          </a>
          <a href="https://linkedin.com" className="hover:underline mt-2 md:mt-0">
            LinkedIn
          </a>
          <a href="mailto:example@example.com" className="hover:underline mt-2 md:mt-0">
            Email
          </a>
          <a href="#rss" className="hover:underline mt-2 md:mt-0">
            RSS feed
          </a>
          <a href="#feedly" className="hover:underline mt-2 md:mt-0">
            Add to Feedly
          </a>
        </div>

        {/* Tulisan "© 2024" untuk Mode Smartphone */}
        <div className="block md:hidden mt-4 text-center">
          © 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
