import React from "react";

const Detail = () => {
  // Dummy data for the page
  const detailData = {
    date: "Sunday, 1 Jan 2023",
    title: "Grid system for better Design User Interface",
    image: "https://via.placeholder.com/778x426",
    description: `
      A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
      If you've been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.
    `,
    summary: `Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.`,
  };

  const examples = [
    {
      sectionTitle: "Examples of Grids in Use",
      subExamples: [
        {
          subTitle: "Example 1: Hierarchical Grid",
          description:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          image: "https://via.placeholder.com/778x426",
          imageCaption:
            "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          subTitle: "Example 2: Column Grid",
          description:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          image: "https://via.placeholder.com/778x426",
          imageCaption:
            "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Atas */}
      <div className="space-y-6 mb-12">
        {/* Date */}
        <p className="text-sm text-gray-600 dark:text-gray-400">{detailData.date}</p>

        {/* Title */}
        <h1 className="text-3xl font-bold text-darkmode dark:text-lightmode">
          {detailData.title}
        </h1>

        {/* Image */}
        <img
          src={detailData.image}
          alt={detailData.title}
          className="w-full h-auto rounded-lg shadow-lg"
        />

        {/* Description */}
        <p className="text-base text-darkmode dark:text-lightmode whitespace-pre-line">
          {detailData.description}
        </p>

        {/* Summary */}
        <p className="text-lg font-bold text-center text-darkmode dark:text-lightmode">
          {detailData.summary}
        </p>
      </div>

      {/* Section Bawah */}
      {examples.map((example, index) => (
        <div key={index} className="space-y-8">
          {/* Section Title */}
          <h2 className="text-2xl font-bold text-darkmode dark:text-lightmode mb-6">
            {example.sectionTitle}
          </h2>

          {example.subExamples.map((subExample, subIndex) => (
            <div key={subIndex} className="space-y-4">
              {/* Sub Title */}
              <h3 className="text-xl font-bold text-darkmode dark:text-lightmode">
                {subExample.subTitle}
              </h3>

              {/* Description */}
              <p className="text-base text-darkmode dark:text-lightmode">
                {subExample.description}
              </p>

              {/* Image */}
              <img
                src={subExample.image}
                alt={subExample.subTitle}
                className="w-full h-auto rounded-lg shadow-lg"
              />

              {/* Image Caption */}
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                {subExample.imageCaption}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Detail;
