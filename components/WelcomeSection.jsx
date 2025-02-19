import React from "react";

const WelcomeSection = () => {
  return (
    <div className="-mt-[98px] text-center md:-mt-28">
      {/* Importing font inside the component */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap');
          .zen-dots {
            font-family: "Zen Dots", cursive;
          }
        `}
      </style>
      <h2 className="text-white text-4xl md:text-[86px] zen-dots">
        Icon CrossFit Fitness Studio
      </h2>
    </div>
  );
};

export default WelcomeSection;
