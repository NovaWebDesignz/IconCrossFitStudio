import React from "react";

const WelcomeSection = () => {
  return (
    <div className="mt-[-32px] py-9 my-10 text-center md:-mt-12 pt-11">
      {/* Importing font inside the component */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap');
          .zen-dots {
            font-family: "Zen Dots", cursive;
          }
        `}
      </style>
      <h2 className="text-white text-4xl md:text-[73px] leading-tight md:leading-[1.2] zen-dots">
        ICON CROSSFIT FITNESS STUDIO
      </h2>
    </div>
  );
};

export default WelcomeSection;
