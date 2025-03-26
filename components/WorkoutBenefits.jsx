import Image from 'next/image';
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });

const benefits = [
  {
    title: "100% GUARANTEED RESULTS",
    description:
      "Achieve your fitness goals with proven techniques and dedicated training sessions.",
    image: "/images/benefits_1.jpg",
  },
  {
    title: "TRAINING FOR ALL AGE GROUPS",
    description:
      "Customized workout plans for kids, adults, and seniors.",
    image: "/images/benefits_2.jpg",
  },
  {
    title: "SPECIAL CARE FOR CHILDREN, WOMEN & SENIORS",
    description:
      "Safe and effective workouts with personalized attention.",
    image: "/images/benefits_3.jpg",
  },
  {
    title: "QUALIFIED TRAINERS FOR QUALITY TRAINING",
    description:
      "Certified trainers ensure high-quality and effective training.",
    image: "/images/benefits_4.jpg",
  },
];

export default function WorkoutBenefits() {
  return (
    <section className="max-w-7xl mx-auto px-16 py-16 md:px-12">
      <div className="text-left mb-24">
        <h2 className={`${anton.className} dark:text-white text-gray-800 italic mb-10 my-12 text-3xl md:text-5xl font-semibold`}>Why Choose Us?</h2>
        <h1 className={`${anton.className} text-4xl md:text-5xl font-bold dark:text-sky-400 text-sky-400`}>Unlock the Best Gym Training Experience</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((item, index) => (
          <div key={index} className="relative group overflow-hidden shadow-lg hover:scale-100 transition-all">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-5 dark:bg-gray-500 bg-white"></div> {/* Top Border */}
              <div className="absolute top-0 left-0 w-5 h-full dark:bg-gray-500 bg-white"></div> {/* Left Border */}
              <div className="absolute top-0 right-0 w-5 h-full dark:bg-gray-500 bg-white"></div> {/* Right Border */}
              <Image
                src={item.image}
                alt={item.title}
                width={350}
                height={500}
                className="w-full h-72 object-cover transition-transform duration-700 ease-in-out hover:scale-105"
              />
            </div>
            <div className="p-6 dark:bg-gray-500 bg-white text-gray-900 dark:text-white text-center">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
