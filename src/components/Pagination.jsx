import React from "react";
import ArrowLeftIcon from "../assets/icons/ArrowLeft.png";
import ArrowRightIcon from "../assets/icons/ArrowRight.png";

const Pagination = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Wrapper Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Previous */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={ArrowLeftIcon} alt="Arrow Left" className="w-4 h-4" />
          <span className="text-gray-600 hover:text-black font-medium">
            Previous
          </span>
        </div>

        {/* Next */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-gray-600 hover:text-black font-medium">
            Next
          </span>
          <img src={ArrowRightIcon} alt="Arrow Right" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
