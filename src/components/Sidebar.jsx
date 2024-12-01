import React from "react";
import WrapIcon from "../assets/icons/Wrap.png"; // Path untuk icon Wrap

const Sidebar = () => {
  // Data Dummy
  const blogPosts = [
    {
      id: 1,
      title: "Bill Walsh leadership lessons",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      categories: ["Leadership", "Management", "Presentation"],
      image: "https://via.placeholder.com/342x240",
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 2,
      title: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      categories: ["Product", "Research", "Frameworks"],
      image: "https://via.placeholder.com/342x240",
      date: "Sunday, 1 Jan 2023",
    },
    // Tambahkan data dummy lainnya sesuai kebutuhan
  ];

  return (
    <div className="w-full md:w-[342px] space-y-6">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="border rounded-lg shadow-lg overflow-hidden bg-lightmode dark:bg-darkmode"
        >
          {/* Image */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[240px] md:h-[240px] object-cover"
          />
          {/* Content */}
          <div className="p-4">
            {/* Date */}
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2">
              {post.date}
            </p>
            {/* Header and Icon */}
            <div className="flex items-start justify-between">
              <h3 className="text-md md:text-lg font-bold text-darkmode dark:text-lightmode">
                {post.title}
              </h3>
              <img
                src={WrapIcon}
                alt="Wrap Icon"
                className="w-4 h-4 ml-2 shrink-0"
              />
            </div>
            {/* Description */}
            <p className="text-sm md:text-gray-600 dark:text-gray-300 text-xs mb-4">
              {post.description}
            </p>
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="text-[10px] md:text-xs px-2 py-1 bg-gray-200 text-darkmode dark:text-lightmode dark:bg-gray-700 rounded"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
