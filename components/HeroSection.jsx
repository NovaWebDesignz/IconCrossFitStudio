import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full max-w-[98%] h-[80vh] flex items-center justify-center bg-gray-900 mt-[530px] md:mt-[540px] rounded-2xl overflow-hidden mx-auto">
      <Image
        src="/images/Homepage_image1.jpg"
        alt="Hero Section"
        fill
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold">Welcome to Icon Gym</h1>
        <p className="mt-4 text-lg">Transform your body, transform your life.</p>
      </div>
    </section>
  );
};

export default HeroSection;
