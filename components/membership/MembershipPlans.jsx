"use client";

import { useRef } from "react";

const membershipPlans = [
  {
    title: "Premium",
    price: "$320/month",
    features: ["Professional Trainers", "All Facilities", "Free Drinks and Supplement", "Diet Program"],
    highlighted: true,
  },
  {
    title: "Advanced",
    price: "$120/month",
    description: "Includes all basic benefits, plus additional classes and premium gym instruments.",
  },
  {
    title: "Basic",
    price: "$70/month",
    description: "Start your fitness journey today with full access to the gym and benefits of our Basic Membership.",
  },
  {
    title: "Family",
    price: "$580",
    description: "Enjoy classes with full access for your entire family.",
  },
];

const MembershipPlans = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-900 text-white py-36 px-6">
      <h2 className="text-3xl font-extrabold text-center mb-32">FLEXIBLE MEMBERSHIP PLANS TO SUIT YOUR LIFESTYLE</h2>
      
      <div className="relative max-w-full overflow-hidden">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-4 z-10"
        >
          ◀
        </button>

        {/* Plans Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-16"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar for Firefox & IE/Edge
        >
          {membershipPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg shadow-md flex flex-col justify-between ${
                plan.highlighted ? "bg-white text-black min-w-[500px] h-[550px]" : "bg-gray-800 min-w-[450px] h-[300px]"
              }`}
            >
              <div>
                <h3 className="text-5xl font-bold">{plan.title}</h3>
                <p className="text-2xl font-semibold">{plan.price}</p>
                {plan.features ? (
                  <ul className="mt-4 space-y-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="text-md">✔ {feature}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg mt-4">{plan.description}</p>
                )}
              </div>

              {plan.highlighted && (
                <button className="mt-4 px-6 mx-28 py-3 bg-sky-400 text-black font-bold rounded">
                  Register Now
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-4 z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default MembershipPlans;
