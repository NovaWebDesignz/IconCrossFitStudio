import Image from 'next/image';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'], weight: '700' });

const benefits = [
  {
    title: "100% GUARANTEED RESULTS",
    description:
      "We ensure you achieve your fitness goals with proven techniques and dedicated training sessions.",
    image: "/images/benefits_1.jpg",
  },
  {
    title: "WE TRAIN FOR ALL AGE GROUPS",
    description:
      "From kids to seniors, our training programs cater to all age groups with customized workout plans.",
    image: "/images/benefits_2.jpg",
  },
  {
    title: "SPECIAL CARE FOR CHILDREN, WOMEN & AGED PEOPLE",
    description:
      "Extra attention and personalized training for children, women, and elderly individuals to ensure safe and effective workouts. 🤝",
    image: "/images/benefits_3.jpg",
  },
  {
    title: "QUALIFIED TRAINERS FOR QUALITY TRAINING",
    description:
      "Our certified trainers bring expertise and experience to deliver high-quality, effective training.",
    image: "/images/benefits_4.jpg",
  },
  {
    title: "EASY TO FOLLOW",
    description:
      "Workouts are presented in an easy-to-follow manner. So, do it right without losing the momentum.",
    image: "/images/benefits_5.jpg",
  },
  {
    title: "SET YOUR OWN PACE",
    description:
      "Work out at a pace that best suits you. Be the boss and take control of your workout routine!",
    image: "/images/benefits_6.jpg",
  },
];

export default function WorkoutBenefits() {
  return (
    <section className="max-w-6xl mx-auto px-1 py-12">
      <div className='lg:-mx-10 md:mx-5 mx-4'>
        <h2 className={`${dancingScript.className} text-red-600 italic text-4xl font-semibold`}>
          Why Choose Us?
        </h2>
        <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold">Unlock the Best Gym Training Experience</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {benefits.map((item, index) => (
          <div key={index} className="relative group overflow-hidden shadow-lg">
            {index % 2 === 0 ? (
              // Square Image on Top, Text Below
              <>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={450} // Increased height, reduced width to make images rectangular
                  className="w-full h-[420px] object-cover"
                />
                <div className="p-10 bg-white text-black">
                  <h3 className="font-extrabold text-lg">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </>
            ) : (
              // Full Image with Text Overlay at Bottom
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={450} // Increased height, reduced width to make images rectangular
                  className="w-full h-[550px] object-cover"
                />
                <div className="absolute bottom-0 bg-black bg-opacity-10 text-white p-10 w-full">
                  <h3 className="font-extrabold text-lg">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
