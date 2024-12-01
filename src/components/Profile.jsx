import React, { useState, useEffect } from "react";

const Profile = () => {
  // State untuk mendeteksi lebar layar
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update ukuran layar secara real-time
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 text-darkmode dark:text-lightmode">
      {/* Gambar */}
      <div className="mb-8">
        <img
          src="https://via.placeholder.com/1216x556"
          alt="Profile"
          className={`w-full ${
            screenWidth <= 834 ? "h-[300px]" : "h-auto"
          } object-cover rounded-lg shadow-lg`}
        />
      </div>

      {/* About Me */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p
          className={`${
            screenWidth <= 390
              ? "text-sm"
              : screenWidth <= 834
              ? "text-base"
              : "text-lg"
          }`}
        >
          As a passionate and experienced UI designer, I am dedicated to
          creating intuitive and engaging user experiences that meet the needs
          of my clients and their users. I have a strong understanding of
          design principles and a proficiency in design tools, and I am
          comfortable working with cross-functional teams to bring projects to
          fruition. I am confident in my ability to create designs that are
          both visually appealing and functional, and I am always looking for
          new challenges and opportunities to grow as a designer.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul
          className={`list-disc list-inside space-y-2 ${
            screenWidth <= 390
              ? "text-sm"
              : screenWidth <= 834
              ? "text-base"
              : "text-lg"
          }`}
        >
          <li>Extensive experience in UI design, with a strong portfolio of completed projects</li>
          <li>Proficiency in design tools such as Adobe Creative Suite and Sketch</li>
          <li>Excellent visual design skills, with a strong understanding of layout, color theory, and typography</li>
          <li>Ability to create wireframes and prototypes to communicate design concepts</li>
          <li>Strong communication and collaboration skills, with the ability to work effectively with cross-functional teams</li>
          <li>Experience conducting user research and gathering insights to inform design decisions</li>
          <li>Proficiency in HTML, CSS, and JavaScript</li>
        </ul>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <ul
          className={`list-disc list-inside space-y-2 ${
            screenWidth <= 390
              ? "text-sm"
              : screenWidth <= 834
              ? "text-base"
              : "text-lg"
          }`}
        >
          <li>5 years of experience as a UI designer, working on a variety of projects for clients in the tech and retail industries</li>
          <li>Led the design of a successful e-commerce website, resulting in a 25% increase in online sales</li>
          <li>Created wireframes and prototypes for a mobile banking app, leading to a 20% increase in app usage</li>
          <li>Conducted user research and usability testing to inform the redesign of a healthcare provider’s website, resulting in a 15% increase in website traffic</li>
        </ul>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul
          className={`list-disc list-inside space-y-2 ${
            screenWidth <= 390
              ? "text-sm"
              : screenWidth <= 834
              ? "text-base"
              : "text-lg"
          }`}
        >
          <li>Bachelor’s degree in Graphic Design</li>
          <li>Certified User Experience Designer (CUED)</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
