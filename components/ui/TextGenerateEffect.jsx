"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

const TextGenerateEffect = ({ words, className, filter = true, duration = 0.5 }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  return (
    <div className={cn("font-bold", className)}>
      <motion.div ref={scope} className="mt-4 text-[35px] sm:text-[55px] lg:text-[80px] md:text-6xl font-extrabold leading-snug tracking-wide">
        {words.split(" ").map((word, idx) => {
          // Check if "Fitness Center" is being rendered together
          if (word === "Fitness") {
            return (
              <motion.span
                key={word + idx}
                className="text-sky-400 opacity-0"
                style={{ filter: filter ? "blur(10px)" : "none" }}
              >
                {word}{" "}
              </motion.span>
            );
          }
          if (word === "Center") {
            return (
              <motion.span
                key={word + idx}
                className="text-sky-400 opacity-0"
                style={{ filter: filter ? "blur(10px)" : "none" }}
              >
                {word}{" "}
              </motion.span>
            );
          }
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{ filter: filter ? "blur(10px)" : "none" }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TextGenerateEffect;
