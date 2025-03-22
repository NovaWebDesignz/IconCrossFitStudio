"use client";

import Image from "next/image";

const images = [
  "/images/Homepage_image1.jpg",
  "/images/Homepage_image2.jpg",
  "/images/Homepage_image3.jpg",
  "/images/Homepage_image4.jpg",
  "/images/Homepage_image5.jpg",
  "/images/Homepage_image6.jpg",
  "/images/Homepage_image7.jpg",
  "/images/Homepage_image8.jpg", 
];
 
const HeroSection = () => {
  return (
    <section className="relative w-full max-w-[94%] sm:max-w-[95%] md:max-w-[98%] h-[80vh] sm:h-[91vh] md:h-[100vh] flex items-center justify-end bg-gray-900 mt-[50px] md:mt-[30px] lg:mt-[8px] rounded-3xl overflow-hidden mx-auto">
      {/* Left Side Text */}
      <div className="absolute left-6 md:left-8 lg:left-14 xl:left-24 top-[14%] sm:top-[13%] md:top-[20%] lg:top-[15%] text-white max-w-[70%] sm:max-w-[65%] md:max-w-[60%] lg:max-w-[60%] xl:max-w-[40%] z-10">
        <p className="text-xs md:text-sm lg:text-md px-3 py-1 bg-gray-800 text-white font-semibold uppercase rounded-lg inline-block tracking-wider">
          Welcome to Icon Gym
        </p>
        <h1 className="text-[35px] sm:text-[55px] lg:text-[80px] md:text-6xl font-extrabold leading-tight mt-4">
          Energize Your Life <br /> with Our <span className="text-sky-400">Fitness Center</span>
        </h1>
        <button className="mt-6 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg text-lg shadow-md transition-all">
          Discover More
        </button>
      </div>

      {/* Slider Wrapper */}
      <div className="absolute inset-0 flex w-[100%] h-full animate-slider">
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={src}
              alt={`Hero Image ${index + 1}`}
              fill
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slider {
          0%, 10% { transform: translateX(0%); }
          12%, 22% { transform: translateX(-100%); transition: transform 1s ease-in-out; }
          24%, 34% { transform: translateX(-200%); transition: transform 1s ease-in-out; }
          36%, 46% { transform: translateX(-300%); transition: transform 1s ease-in-out; }
          48%, 58% { transform: translateX(-400%); transition: transform 1s ease-in-out; }
          60%, 70% { transform: translateX(-500%); transition: transform 1s ease-in-out; }
          72%, 82% { transform: translateX(-600%); transition: transform 1s ease-in-out; }
          84%, 94% { transform: translateX(-700%); transition: transform 1s ease-in-out; }
          96%, 100% { transform: translateX(-800%); transition: transform 1s ease-in-out; }
        }

        .animate-slider {
          display: flex;
          animation: slider 47s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
