import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import ShortInfo from "@/components/ShortInfo";
import WorkoutBenefits from "@/components/WorkoutBenefits";


import { AnimatedTestimonialsDemo } from "@/components/events/animatedtestimonialsdemo";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      <WelcomeSection />
      <ShortInfo />
      <WorkoutBenefits />
      <AnimatedTestimonialsDemo />
    </div>
  );
} 