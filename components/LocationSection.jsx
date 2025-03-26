import React from "react";
import Image from "next/image";

const LocationSection = () => {
  return (
    <div className="px-6 py-6 rounded-t-3xl bg-sky-100 text-black">
      <div className="container flex flex-col-reverse items-center justify-between gap-10 mx-auto lg:flex-row">
        
        {/* Left Side: Text & Buttons */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="mb-6 text-2xl font-extrabold md:text-4xl">
            JOIN US AT ICON CROSSFIT & <br />
            STAY CONNECTED WITH US!
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/contact"
              className="px-6 py-3 text-white font-semibold bg-black rounded-lg hover:bg-gray-800 transition"
            >
              CONTACT US
            </a>

            <a
              href="/location"
              className="px-6 py-3 text-white font-semibold bg-sky-400 rounded-lg hover:bg-sky-500 transition"
            >
              LOCATION
            </a>
          </div>
        </div>

        {/* Right Side: Full-Size Image */}
        <div className="lg:w-1/2">
          <Image
            src="/images/locationsectionimg.jpg"
            alt="Location Section"
            width={700}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </div>
        
      </div>
    </div>
  );
};

export default LocationSection;
