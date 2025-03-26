import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import ShortInfo from "@/components/ShortInfo";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";

import { AnimatedTestimonialsDemo } from "@/components/events/animatedtestimonialsdemo";

export const metadata = {
  title: "Icon CrossFit Studio",
  description: "Embark on your Fitness Journey",
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      <WelcomeSection />
      <ShortInfo />
      <StickyScrollRevealDemo />
      <AnimatedTestimonialsDemo />
    </div>
  );
} 