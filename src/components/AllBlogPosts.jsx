import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/async/postSlice";
import { Link } from "react-router-dom";
import WrapIcon from "../assets/icons/Wrap.png";

const AllBlogPosts = () => {
  const dispatch = useDispatch();
  const { data: blogPosts, loading, error } = useSelector((state) => state.posts.allPosts);

  // Panggil aksi untuk mengambil data ketika komponen pertama kali dirender
  useEffect(() => {
    dispatch(fetchPosts({ page: 1 })); // Ganti "1" sesuai kebutuhan untuk pagination
  }, [dispatch]);

  // State untuk mendeteksi lebar layar
  const [isDesktop, setIsDesktop] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmartphone, setIsSmartphone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width > 834);
      setIsTablet(width <= 834 && width > 390);
      setIsSmartphone(width <= 390);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return <div className="text-center text-darkmode dark:text-lightmode">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!blogPosts || blogPosts.length === 0) {
    return <div className="text-center text-darkmode dark:text-lightmode">No blog posts available</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-darkmode dark:text-lightmode mb-8">All blog posts</h2>

      {/* Desktop Mode */}
      {isDesktop && (
        <div className="grid grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.key}`} key={post.key}>
              <div className="border rounded-lg shadow-lg overflow-hidden bg-lightmode dark:bg-darkmode">
                <img
                  src={post.thumb}
                  alt={post.title}
                  className="w-full h-[240px] object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.time}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-darkmode dark:text-lightmode">{post.title}</h3>
                    <img
                      src={WrapIcon}
                      alt="Wrap Icon"
                      className="w-4 h-4 ml-2"
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post.desc}</p>
                  <div className="flex flex-wrap space-x-2">
                    <span
                      key={post.tag}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-darkmode dark:text-lightmode rounded"
                    >
                      {post.tag}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Tablet Mode */}
      {isTablet && (
        <div className="grid grid-cols-2 gap-4">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.key}`} key={post.key}>
              <div className="border rounded-lg shadow-lg overflow-hidden bg-lightmode dark:bg-darkmode">
                <img
                  src={post.thumb}
                  alt={post.title}
                  className="w-full h-[240px] object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.time}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-darkmode dark:text-lightmode">{post.title}</h3>
                    <img
                      src={WrapIcon}
                      alt="Wrap Icon"
                      className="w-4 h-4 ml-2"
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post.desc}</p>
                  <div className="flex flex-wrap space-x-2">
                    <span
                      key={post.tag}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-darkmode dark:text-lightmode rounded"
                    >
                      {post.tag}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Smartphone Mode */}
      {isSmartphone && (
        <div className="flex flex-col space-y-4">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.key}`} key={post.key}>
              <div className="border rounded-lg shadow-lg overflow-hidden bg-lightmode dark:bg-darkmode">
                <img
                  src={post.thumb}
                  alt={post.title}
                  className="w-full h-[240px] object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.time}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-darkmode dark:text-lightmode">{post.title}</h3>
                    <img
                      src={WrapIcon}
                      alt="Wrap Icon"
                      className="w-4 h-4 ml-2"
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post.desc}</p>
                  <div className="flex flex-wrap space-x-2">
                    <span
                      key={post.tag}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-darkmode dark:text-lightmode rounded"
                    >
                      {post.tag}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBlogPosts;
