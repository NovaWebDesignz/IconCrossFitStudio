import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full max-w-[97%] md:max-w-[98%] h-[80vh] md:h-[93vh] flex items-center justify-end bg-gray-900 mt-[45px] rounded-3xl overflow-hidden mx-auto">
      <Image
        src="/images/Homepage_image1.jpg"
        alt="Hero Section"
        fill
        className="absolute inset-0 object-cover w-full h-full"
      />
      {/*
      <div className="relative z-10 pr-8 text-right text-white md:pr-12">
        <h1 className="text-5xl font-[750] leading-tight">
          WELCOME TO <br /> ICON CROSSFIT STUDIO
        </h1>
        <p className="mt-4 text-lg">Transform your body, transform your life.</p>
      </div>
      */}
    </section>
  );
};

export default HeroSection;
