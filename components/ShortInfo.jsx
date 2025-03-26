import React from "react";
import { TbNorthStar } from "react-icons/tb";

const ShortInfo = () => {
  return (
    <div className="relative w-full max-w-[95%] md:max-w-[98%] h-auto md:h-auto  mt-[45px] pt-12 md:pt-32 rounded-2xl overflow-hidden mx-auto flex flex-col items-center px-6 py-12 md:py-24 text-center bg-gray-100">
      {/* Star Icon */}
      <TbNorthStar className="mb-4 text-6xl text-black" />

      {/* Heading */}
      <h2 className="mb-4 text-3xl font-extrabold text-black md:text-5xl">
      FITNESS POWERED BY PEOPLE, <br />  NOT MACHINES.
      </h2>

      {/* Description */}
      <p className="max-w-2xl mb-6 text-base text-gray-700 md:text-lg">
        We believe in the strength of human potential. Our focus is on CrossFit training, emphasizing functional movements and dynamic workouts. 
        Whether you're new to fitness or an experienced athlete, our expert-led training sessions will help you push your limits—without relying on machines.
      </p>

      {/* Button */}
      <button className="px-6 py-2 text-lg font-semibold text-black transition border border-black rounded-full hover:bg-black hover:text-white">
        JOIN TODAY
      </button>
    </div>
  );
};

export default ShortInfo;
