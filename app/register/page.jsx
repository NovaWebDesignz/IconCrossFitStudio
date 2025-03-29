import React from "react";
import RegisterForm from "@/components/ui/RegisterForm";

const PrayerRequestPage = () => {
  return (
    <div className="container px-4 py-8 pt-32 pb-32 mx-auto lg:pt-40">
      {/* Heading and Subheading */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-500">Register Here</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Please fill out below details</p>
        {/* Description 
        <p className="max-w-3xl mx-auto mt-6 mb-20 text-lg text-gray-500">
          One of the greatest gifts one can give is sharing our faith with others while expressing gratitude to God.
          We would love to hear what incredible things God has done for you and the many ways He has changed your life!
          Your story will be a blessing for many who need inspiration and encouragement.
        </p>
        */}
      </div>

      {/* Testimony Form */}
      <div className="pt-12 pb-12 mt-12 bg-slate-200">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Submit Your Response</h2>
        <RegisterForm /> {/* Use the SignupForm component here */}
      </div>
    </div>
  );
};

export default PrayerRequestPage;
