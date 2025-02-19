import React from "react";

const WelcomeSection = () => {
  return (
    <div className="relative mt-[-32px] py-9 z-10 my-10 text-center md:-mt-56 pt-11">
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
      <h2 className="text-white text-4xl md:text-[153px] leading-tight md:leading-[1.2] big-shoulders">
        ICON CROSSFIT FITNESS STUDIO
      </h2>
    </div>
  );
};

export default WelcomeSection;
