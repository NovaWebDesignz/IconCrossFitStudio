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
    <section className="relative w-full max-w-[96%] md:max-w-[96%] h-[85vh] md:h-[93vh] flex items-center justify-end bg-gray-900 mt-[30px] md:mt-[52px] rounded-3xl overflow-hidden mx-auto">
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
          0%, 12.5% { transform: translateX(0%); }
          16%, 25% { transform: translateX(-100%); }
          28%, 37.5% { transform: translateX(-200%); }
          41%, 50% { transform: translateX(-300%); }
          53%, 62.5% { transform: translateX(-400%); }
          66%, 75% { transform: translateX(-500%); }
          78%, 87.5% { transform: translateX(-600%); }
          91%, 100% { transform: translateX(-700%); }
        }

        .animate-slider {
          display: flex;
          animation: slider 27s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
