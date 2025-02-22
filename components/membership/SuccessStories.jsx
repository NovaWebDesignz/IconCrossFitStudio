"use client";

import { useRef } from "react";

const metrics = [
  { number: "6,154", description: "Gym Members Since January 2020" },
  { number: "350", description: "Born into Body Builder Champions Every Year" },
  { number: "90%", description: "Members see key improvement in 3-6 months" },
  { number: "20%", description: "Mass Muscle Increase in 12 Months Training" },
];

const SuccessStories = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-sky-400 text-black max-w-[95%] md:max-w-[98%] w-full mx-auto rounded-2xl py-32 px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        {/* Left Content: SUCCESS STORIES Heading & Paragraph */}
        <div className="md:w-[40%]">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-2xl font-bold">»»</span>
            <h2 className="text-4xl font-bold">SUCCESS STORIES</h2>
          </div>
          <p className="text-lg">
            Join our roster! We have over satisfied members who have transformed their lives at Icon Gym.
          </p>
        </div>

        {/* Right Content: Video Scroll Section */}
        <div className="relative md:ml-[600px] mt-6 md:mt-0 w-full md:w-auto overflow-hidden">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
          >
            ◀
          </button>

          {/* Video Container (Hidden Scrollbar) */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-12 max-w-full"
          >
            <div className="min-w-[490px] h-[350px] bg-gray-800 flex items-center justify-center text-white rounded-lg">
              <span>Video Placeholder</span>
            </div>
            <div className="min-w-[490px] h-[350px] bg-gray-800 flex items-center justify-center text-white rounded-lg">
              <span>Video Placeholder</span>
            </div>
            <div className="min-w-[490px] h-[350px] bg-gray-800 flex items-center justify-center text-white rounded-lg">
              <span>Video Placeholder</span>
            </div>
            <div className="min-w-[490px] h-[350px] bg-gray-800 flex items-center justify-center text-white rounded-lg">
              <span>Video Placeholder</span>
            </div>
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-black text-white p-16 rounded-lg text-center">
            <h3 className="text-5xl font-bold">{metric.number}</h3>
            <p className="text-md mt-3">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
