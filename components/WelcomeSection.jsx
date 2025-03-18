import React from "react";
import { Cover } from "@/components/ui/cover";

export default function WelcomeSection() {
  return (
    <div className="relative w-full bg-sky-400 py-2 -mt-32 mb-28 flex justify-center items-center">
      <h1
        className="text-4xl md:text-4xl lg:text-4xl font-semibold text-center max-w-7xl mx-auto relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
      >
        Train Hard. <Cover>Move Fast</Cover> Stay Strong.
      </h1>
    </div>
  );
}
