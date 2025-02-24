import React from "react";

const WelcomeSection = () => {
  return (
    <div className="relative mt-[-138px] mb-20 md:mb-48 lg:mb-40 py-0 z-10 my-6 text-center md:-mt-52 pt-11">
      {/* Importing font inside the component */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@100..900&display=swap');
          .big-shoulders {
            font-family: "Big Shoulders Text";
            font-weight: 900;
          }
        `}
      </style>
      <h2 className="text-black text-3xl sm:text-5xl md:text-[72px] bg-sky-400 leading-tight md:leading-[1.2] big-shoulders">
        ICON CROSSFIT FITNESS STUDIO
      </h2>
    </div>
  );
};

export default WelcomeSection;
