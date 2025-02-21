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
    <section className="relative w-full max-w-[96%] md:max-w-[96%] h-[85vh] md:h-[99vh] flex items-center justify-end bg-gray-900 mt-[30px] md:mt-[40px] lg:mt-[52px] rounded-3xl overflow-hidden mx-auto">
      {/* Left Side Text */}
      <div className="absolute left-4 md:left-10 lg:left-16 top-[30%] md:top-[25%] lg:top-[38%] text-[#e7f3fd] max-w-[80%] md:max-w-[60%] lg:max-w-[55%] z-10">
        <p className="text-xs md:text-sm lg:text-LG pl-2 text-sky-400 font-[700]">
          BUILD MUSCLE, LOSE WEIGHT, OR IMPROVE ENDURENCE
        </p>
        <h1 className="text-6xl lg:text-[80px] md:text-6xl font-[1000] leading-tight mt-0">
          Own Your <br /> Power, Own <br /> Your Future!
        </h1>
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
