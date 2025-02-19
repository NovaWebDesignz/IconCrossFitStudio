import React from "react";

const LocationSection = () => {
  return (
    <div className="px-6 py-16 text-white bg-[#181818]">
      <div className="container flex flex-col items-center justify-between gap-10 mx-auto lg:flex-row">
        {/* Left Side: Newsletter Signup */}
        <div className="text-center lg:w-1/2 lg:text-left">
          <h2 className="mb-6 text-2xl font-extrabold md:text-4xl">
            JOIN US AT ICON CROSSFIT & <br />
            STAY CONNECTED WITH US!
          </h2>

          {/* Email Input & Button */}
          <div className="flex items-center max-w-lg mx-auto overflow-hidden border border-gray-500 rounded-full lg:mx-0">
            <input
              type="email"
              placeholder="Need Directions? Open Google Maps now >>"
              className="w-full px-4 py-3 text-white bg-transparent focus:outline-none"
            />
            <a
                href="https://maps.app.goo.gl/1JRgVdAFrBu5HgVi7"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="px-6 py-3 font-semibold text-black bg-yellow-500">
                    LOCATION
                </button>
            </a>

          </div>

        </div>

        {/* Right Side: Google Map */}
        <div className="lg:w-1/2">
          <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2780543481717!2d80.1430856!3d12.8898338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52590057a928ed%3A0x7fc6f8ff98cc38ac!2sICON%20CROSSFIT%20FITNESS%20STUDIO%20MAPPEDU!5e0!3m2!1sen!2sin!4v1739977908775!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
