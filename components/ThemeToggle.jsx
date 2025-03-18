"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-all duration-300"
    >
      <div
        className={`w-5 h-5 bg-white dark:bg-black rounded-full shadow-md transform transition-all duration-300 ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      ></div>
    </button>
  );
};

export default ThemeToggle;
