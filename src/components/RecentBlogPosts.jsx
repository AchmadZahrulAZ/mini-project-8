import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecentPosts } from '../redux/async/postSlice';

const RecentBlogPosts = () => {
  const dispatch = useDispatch();
  const { data: blogPosts, loading, error } = useSelector((state) => state.posts.recentPosts);

  // Panggil API saat komponen pertama kali dirender
  useEffect(() => {
    dispatch(fetchRecentPosts(1)); // Mengambil data dari page 1
  }, [dispatch]);

  // State untuk mendeteksi lebar layar
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) {
    return <div className="text-center text-darkmode dark:text-lightmode">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!blogPosts || blogPosts.length === 0) {
    return <div className="text-center text-darkmode dark:text-lightmode">No recent posts available</div>;
  }

  // Ambil hanya 4 post pertama
  const recentPosts = blogPosts.slice(0, 4);

  // Smartphone Mode (Width <= 390px)
  if (screenWidth <= 390) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-darkmode dark:text-lightmode mb-6">Recent blog posts</h2>

        {/* Section Atas */}
        <div className="space-y-8 mb-8">
          {/* Blog Post Card Besar */}
          {recentPosts[0] && (
            <div className="border rounded-lg overflow-hidden shadow-lg bg-lightmode dark:bg-darkmode">
              <img src={recentPosts[0]?.thumb} alt={recentPosts[0]?.title} className="w-full h-[228px] object-cover" />
              <div className="p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{recentPosts[0]?.time}</p>
                <h3 className="text-md font-bold text-darkmode dark:text-lightmode mb-2">{recentPosts[0]?.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{recentPosts[0]?.desc}</p>
              </div>
            </div>
          )}

          {/* Blog Post Cards Kecil */}
          <div className="space-y-4">
            {recentPosts.slice(1, 3).map((post) => (
              <div key={post.key} className="border rounded-lg shadow-lg overflow-hidden bg-lightmode dark:bg-darkmode">
                <img src={post?.thumb} alt={post?.title} className="w-full h-[200px] object-cover" />
                <div className="p-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{post?.time}</p>
                  <h3 className="text-md font-bold text-darkmode dark:text-lightmode mb-2">{post?.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Bawah */}
        {recentPosts[3] && (
          <div className="border rounded-lg shadow-lg overflow-hidden bg-lightmode dark:bg-darkmode">
            <img src={recentPosts[3]?.thumb} alt={recentPosts[3]?.title} className="w-full h-[200px] object-cover" />
            <div className="p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{recentPosts[3]?.time}</p>
              <h3 className="text-md font-bold text-darkmode dark:text-lightmode mb-2">{recentPosts[3]?.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{recentPosts[3]?.desc}</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Tablet Mode (Width > 390px && Width <= 834px)
  if (screenWidth > 390 && screenWidth <= 834) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-darkmode dark:text-lightmode mb-8">Recent blog posts</h2>

        {/* Section Atas */}
        <div className="space-y-8 mb-8">
          {/* Blog Post Card Besar */}
          {recentPosts[0] && (
            <div className="border rounded-lg overflow-hidden shadow-lg bg-lightmode dark:bg-darkmode">
              <img src={recentPosts[0]?.thumb} alt={recentPosts[0]?.title} className="w-full h-[228px] object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{recentPosts[0]?.time}</p>
                <h3 className="text-lg font-bold text-darkmode dark:text-lightmode mb-2">{recentPosts[0]?.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{recentPosts[0]?.desc}</p>
              </div>
            </div>
          )}

          {/* Blog Post Cards Kecil */}
          <div className="space-y-4">
            {recentPosts.slice(1, 3).map((post) => (
              <div key={post.key} className="flex border rounded-lg shadow-lg bg-lightmode dark:bg-darkmode">
                <img src={post?.thumb} alt={post?.title} className="w-[320px] h-[200px] object-cover" />
                <div className="p-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post?.time}</p>
                  <h3 className="text-lg font-bold text-darkmode dark:text-lightmode mb-2">{post?.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Bawah */}
        {recentPosts[3] && (
          <div className="border rounded-lg shadow-lg overflow-hidden bg-lightmode dark:bg-darkmode">
            <img src={recentPosts[3]?.thumb} alt={recentPosts[3]?.title} className="w-full h-[188px] object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{recentPosts[3]?.time}</p>
              <h3 className="text-lg font-bold text-darkmode dark:text-lightmode mb-2">{recentPosts[3]?.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{recentPosts[3]?.desc}</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop Mode (Width > 834px)
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-darkmode dark:text-lightmode mb-8">Recent blog posts</h2>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Blog Post Card Besar */}
        {recentPosts[0] && (
          <div className="border rounded-lg overflow-hidden shadow-lg bg-lightmode dark:bg-darkmode">
            <img src={recentPosts[0]?.thumb} alt={recentPosts[0]?.title} className="w-full h-[228px] object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{recentPosts[0]?.time}</p>
              <h3 className="text-lg font-bold text-darkmode dark:text-lightmode mb-2">{recentPosts[0]?.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{recentPosts[0]?.desc}</p>
            </div>
          </div>
        )}

        {/* Blog Post Cards Kecil */}
        <div className="space-y-4">
          {recentPosts.slice(1, 3).map((post) => (
            <div key={post.key} className="flex border rounded-lg shadow-lg bg-lightmode dark:bg-darkmode">
              <img src={post?.thumb} alt={post?.title} className="w-[320px] h-[200px] object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post?.time}</p>
                <h3 className="text-lg font-bold text-darkmode dark:text-lightmode mb-2">{post?.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Bawah */}
      {recentPosts[3] && (
        <div className="grid grid-cols-2 gap-6">
          {/* Bagian Kiri (Gambar) */}
          <img src={recentPosts[3]?.thumb} alt={recentPosts[3]?.title} className="w-full h-[246px] object-cover border rounded-lg shadow-lg" />

          {/* Bagian Kanan (Informasi) */}
          <div className="border rounded-lg shadow-lg bg-lightmode dark:bg-darkmode p-4 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{recentPosts[3]?.time}</p>
              <h3 className="text-lg font-bold text-darkmode dark:text-lightmode mb-2">{recentPosts[3]?.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{recentPosts[3]?.desc}</p>
            </div>
            {/* Kategori */}
            <div className="flex flex-wrap space-x-2">
              <span key={recentPosts[3]?.tag} className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 text-darkmode dark:text-lightmode rounded">
                {recentPosts[3]?.tag}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentBlogPosts;
