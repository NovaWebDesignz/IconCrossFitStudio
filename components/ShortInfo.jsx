import React from "react";

const ShortInfo = () => {
  return (
    <div className="relative w-full max-w-[95%] md:max-w-[98%] h-auto md:h-auto  mt-[45px]  rounded-2xl overflow-visible mx-auto flex flex-col items-center px-6 py-28 md:py-24 text-center bg-gray-100">
      {/* Background Image */}
      <img 
        src="/images/shortinfo_backpic.png" 
        alt="Background" 
        className=" w-96 h-80 mt-16 opacity-40" 
      />
      
      {/* Logo Icon */}
      <img 
        src="/images/Icon_logo.png" 
        alt="Logo" 
        className="absolute top-[-170px] sm:top-[-250px] left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] drop-shadow-xl z-20" 
      />

      {/* Heading */}
      <h2 className="mb-4 text-3xl -mt-64 font-extrabold text-black md:text-5xl z-10">
      FITNESS POWERED BY PEOPLE, <br />  NOT MACHINES.
      </h2>

      {/* Description */}
      <p className="max-w-2xl mb-6 text-base text-gray-700 md:text-lg z-10">
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
