import React, { useState, useEffect } from 'react';

const RecentBlogPosts = () => {
  // State untuk mendeteksi lebar layar
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update lebar layar secara real-time
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Data Dummy
  const blogPosts = [
    {
      id: 1,
      date: 'Sunday, 1 Jan 2023',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      categories: ['Design', 'Research', 'Presentation'],
      image: 'https://via.placeholder.com/770x228',
    },
    {
      id: 2,
      date: 'Sunday, 1 Jan 2023',
      title: 'Migrating to Linear 101',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
      categories: ['Design', 'Research'],
      image: 'https://via.placeholder.com/320x200',
    },
    {
      id: 3,
      date: 'Sunday, 1 Jan 2023',
      title: 'Building your API Stack',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      categories: ['Design', 'Research'],
      image: 'https://via.placeholder.com/320x200',
    },
    {
      id: 4,
      date: 'Sunday, 1 Jan 2023',
      title: 'Climate Endgame: Exploring catastrophic climate change scenarios',
      description: 'A grid system is a design tool used to arrange content on a webpage.',
      categories: ['Design', 'Interface'],
      image: 'https://via.placeholder.com/770x188',
    },
  ];

  // Render Smartphone Mode
  if (screenWidth <= 390) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-darkmode dark:text-lightmode mb-6">Recent blog posts</h2>

        {/* Section Atas */}
        <div className="space-y-8 mb-8">
          {/* Blog Post Card Besar */}
          <div className="border rounded-lg overflow-hidden shadow-lg bg-lightmode dark:bg-darkmode">
            <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-[228px] object-cover" />
            <div className="p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{blogPosts[0].date}</p>
              <h3 className="text-md font-bold text-darkmode dark:text-lightmode mb-2">{blogPosts[0].title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{blogPosts[0].description}</p>
              <div className="flex flex-wrap space-x-2">
                {blogPosts[0].categories.map((category) => (
                  <span key={category} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-darkmode dark:text-lightmode rounded">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Post Cards Kecil */}
          {blogPosts.slice(1, 3).map((post) => (
            <div key={post.id} className="border rounded-lg shadow-lg overflow-hidden bg-lightmode dark:bg-darkmode">
              <img src={post.image} alt={post.title} className="w-full h-[200px] object-cover" />
              <div className="p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
                <h3 className="text-md font-bold text-darkmode dark:text-lightmode mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post.description}</p>
                <div className="flex flex-wrap space-x-2">
                  {post.categories.map((category) => (
                    <span key={category} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-darkmode dark:text-lightmode rounded">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bawah */}
        <div className="space-y-4">
          {/* Gambar */}
          <img src={blogPosts[3].image} alt={blogPosts[3].title} className="w-full h-[200px] object-cover border rounded-lg shadow-lg bg-lightmode dark:bg-darkmode" />

          {/* Content */}
          <div className="border rounded-lg shadow-lg bg-lightmode dark:bg-darkmode p-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{blogPosts[3].date}</p>
            <h3 className="text-md font-bold text-darkmode dark:text-lightmode mb-2">{blogPosts[3].title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{blogPosts[3].description}</p>
            <div className="flex flex-wrap space-x-2">
              {blogPosts[3].categories.map((category) => (
                <span key={category} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-darkmode dark:text-lightmode rounded">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  
  if (screenWidth > 834) {
    // Render Desktop
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-darkmode dark:text-lightmode mb-8">Recent blog posts</h2>

        {/* Section Atas */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Bagian Kiri */}
          <div>
            <div className="border rounded-lg overflow-hidden shadow-lg bg-lightmode dark:bg-darkmode">
              <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-[228px] object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{blogPosts[0].date}</p>
                <h3 className="text-lg font-bold text-darkmode dark:text-lightmode mb-2">{blogPosts[0].title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{blogPosts[0].description}</p>
                <div className="flex flex-wrap space-x-2">
                  {blogPosts[0].categories.map((category) => (
                    <span key={category} className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 text-darkmode dark:text-lightmode rounded">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bagian Kanan */}
          <div className="space-y-4">
            {blogPosts.slice(1, 3).map((post) => (
              <div key={post.id} className="flex border rounded-lg shadow-lg bg-lightmode dark:bg-darkmode">
                <img src={post.image} alt={post.title} className="w-[320px] h-[200px] object-cover" />
                <div className="p-4 flex flex-col justify-between">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
                  <h3 className="text-lg font-bold text-darkmode dark:text-lightmode mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
                  <div className="flex space-x-2">
                    {post.categories.map((category) => (
                      <span key={category} className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 text-darkmode dark:text-lightmode rounded">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Bawah */}
        <div className="grid grid-cols-2 gap-6">
          {/* Bagian Kiri */}
          <img src={blogPosts[3].image} alt={blogPosts[3].title} className="w-full h-[246px] object-cover border rounded-lg shadow-lg bg-lightmode dark:bg-darkmode" />

          {/* Bagian Kanan */}
          <div className="border rounded-lg shadow-lg bg-lightmode dark:bg-darkmode p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{blogPosts[3].date}</p>
            <h3 className="text-lg font-bold text-darkmode dark:text-lightmode mb-2">{blogPosts[3].title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{blogPosts[3].description}</p>
            <div className="flex space-x-2">
              {blogPosts[3].categories.map((category) => (
                <span key={category} className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 text-darkmode dark:text-lightmode rounded">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // Render Tablet Mode
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-darkmode dark:text-lightmode mb-8">Recent blog posts</h2>
        {/* Section Atas */}
        <div className="space-y-8 mb-8">
          {/* Blog Post Card Besar */}
          <div className="border rounded-lg overflow-hidden shadow-lg bg-lightmode dark:bg-darkmode">
            <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-[228px] object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{blogPosts[0].date}</p>
              <h3 className="text-lg font-bold text-darkmode dark:text-lightmode mb-2">{blogPosts[0].title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{blogPosts[0].description}</p>
              <div className="flex space-x-2">
                {blogPosts[0].categories.map((category) => (
                  <span key={category} className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 text-darkmode dark:text-lightmode rounded">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Post Cards Kecil */}
          <div className="space-y-4">
            {blogPosts.slice(1, 3).map((post) => (
              <div key={post.id} className="flex border rounded-lg shadow-lg bg-lightmode dark:bg-darkmode">
                <img src={post.image} alt={post.title} className="w-[320px] h-[200px] object-cover" />
                <div className="p-4 flex flex-col justify-between">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
                  <h3 className="text-lg font-bold text-darkmode dark:text-lightmode mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
                  <div className="flex space-x-2">
                    {post.categories.map((category) => (
                      <span key={category} className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 text-darkmode dark:text-lightmode rounded">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Bawah */}
        <div className="space-y-4">
          {/* Bagian Atas */}
          <img src={blogPosts[3].image} alt={blogPosts[3].title} className="w-full h-[188px] object-cover border rounded-lg shadow-lg bg-lightmode dark:bg-darkmode" />

          {/* Bagian Bawah */}
          <div className="border rounded-lg shadow-lg bg-lightmode dark:bg-darkmode p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{blogPosts[3].date}</p>
            <h3 className="text-lg font-bold text-darkmode dark:text-lightmode mb-2">{blogPosts[3].title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{blogPosts[3].description}</p>
            <div className="flex space-x-2">
              {blogPosts[3].categories.map((category) => (
                <span key={category} className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 text-darkmode dark:text-lightmode rounded">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RecentBlogPosts;
