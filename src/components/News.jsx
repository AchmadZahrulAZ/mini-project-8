import React from "react";

const News = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-lightmode dark:bg-darkmode text-darkmode dark:text-lightmode transition-colors duration-300">
      {/* Bagian Atas */}
      <div className="text-center space-y-4">
        {/* Tulisan Kecil */}
        <p className="text-sm text-purple-600 font-medium">Newsletters</p>

        {/* Judul */}
        <h2 className="text-3xl font-bold">Stories and interviews</h2>

        {/* Deskripsi */}
        <p className="text-gray-600 dark:text-gray-300">
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </p>
      </div>

      {/* Form Input dan Tombol */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
        {/* Input Form */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-[400px] px-4 py-2 border rounded-md text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        />

        {/* Tombol Subscribe */}
        <button className="px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition">
          Subscribe
        </button>
      </div>

      {/* Privacy Policy */}
      <p className="text-center text-gray-600 dark:text-gray-300 text-sm mt-4">
        We care about your data in our{" "}
        <a
          href="#"
          className="underline text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-500"
        >
          privacy policy
        </a>
        .
      </p>
    </div>
  );
};

export default News;
