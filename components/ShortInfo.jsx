import React from "react";
import { TbNorthStar } from "react-icons/tb";

const ShortInfo = () => {
  return (
    <div className="relative w-full max-w-[98%] h-[55vh] md:h-[63vh]  mt-[45px] rounded-2xl overflow-hidden mx-auto flex flex-col items-center px-6 py-16 text-center bg-gray-100">
      {/* Star Icon */}
      <TbNorthStar className="mb-4 text-6xl text-black" />

      {/* Heading */}
      <h2 className="mb-4 text-3xl font-extrabold text-black md:text-5xl">
        FITNESS SHOULD BE <br /> ACCESSIBLE TO EVERYONE.
      </h2>

      {/* Description */}
      <p className="max-w-2xl mb-6 text-base text-gray-700 md:text-lg">
        Whether you're a seasoned athlete or just starting out, we have a variety of equipment and classes to suit your needs. 
        Our cardio machines, weight lifting equipment, and functional training areas provide a comprehensive workout experience.
      </p>

      {/* Button */}
      <button className="px-6 py-2 text-lg font-semibold text-black transition border border-black rounded-full hover:bg-black hover:text-white">
        JOIN TODAY
      </button>
    </div>
  );
};

export default ShortInfo;
