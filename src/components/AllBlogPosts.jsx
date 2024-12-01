import React, { useState, useEffect } from "react";
import WrapIcon from "../assets/icons/Wrap.png"; // Path untuk icon Wrap

const AllBlogPosts = () => {
  // Data Dummy
  const blogPosts = [
    {
      id: 1,
      title: "Bill Walsh leadership lessons",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      categories: ["Leadership", "Management"],
      image: "https://via.placeholder.com/384x240",
      author: "Alec Whitten",
      date: "1 Jan 2023",
    },
    {
      id: 2,
      title: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      categories: ["Product", "Research", "Frameworks"],
      image: "https://via.placeholder.com/384x240",
      author: "Demi Wilkinson",
      date: "1 Jan 2023",
    },
    {
      id: 3,
      title: "What is Wireframing?",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      categories: ["Design", "Research"],
      image: "https://via.placeholder.com/384x240",
      author: "Candice Wu",
      date: "1 Jan 2023",
    },
    {
      id: 4,
      title: "How collaboration makes us better designers",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      categories: ["Design", "Research"],
      image: "https://via.placeholder.com/384x240",
      author: "Natali Craig",
      date: "1 Jan 2023",
    },
    {
      id: 5,
      title: "Our top 10 Javascript frameworks to use",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      categories: ["Software Development", "Tools", "SaaS"],
      image: "https://via.placeholder.com/384x240",
      author: "Drew Cano",
      date: "1 Jan 2023",
    },
    {
      id: 6,
      title: "Podcast: Creating a better CX Community",
      description:
        "Starting a community doesn’t need to be complicated, but how do you get started?",
      categories: ["Podcasts", "Customer Success"],
      image: "https://via.placeholder.com/384x240",
      author: "Orlando Diggs",
      date: "1 Jan 2023",
    },
  ];

  // State for adaptive rendering
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
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Rendering
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Bagian Atas */}
      <h2 className="text-2xl font-bold mb-8">All blog posts</h2>

      {/* Mode Desktop */}
      {isDesktop && (
        <div className="grid grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[240px] object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{post.title}</h3>
                  <img
                    src={WrapIcon}
                    alt="Wrap Icon"
                    className="w-4 h-4 ml-2"
                  />
                </div>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <div className="flex flex-wrap space-x-2">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="text-xs px-2 py-1 bg-gray-200 rounded"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mode Tablet */}
      {isTablet && (
        <div className="grid grid-cols-2 gap-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[240px] object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{post.title}</h3>
                  <img
                    src={WrapIcon}
                    alt="Wrap Icon"
                    className="w-4 h-4 ml-2"
                  />
                </div>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <div className="flex flex-wrap space-x-2">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="text-xs px-2 py-1 bg-gray-200 rounded"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mode Smartphone */}
      {isSmartphone && (
        <div className="flex flex-col space-y-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[240px] object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{post.title}</h3>
                  <img
                    src={WrapIcon}
                    alt="Wrap Icon"
                    className="w-4 h-4 ml-2"
                  />
                </div>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <div className="flex flex-wrap space-x-2">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="text-xs px-2 py-1 bg-gray-200 rounded"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBlogPosts;
