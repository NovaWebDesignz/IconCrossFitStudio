"use client";

import React, { useState, useEffect } from "react";
import { FaArrowTurnDown } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header
      className={`fixed top-4 md:top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] md:max-w-full mx-auto rounded-2xl bg-sky-300 shadow-lg transition-all duration-300 `}
    >
      <div className="flex items-center justify-between w-full px-6 py-[18px] md:py-[6px] md:px-12">
        
        {/* Logo */}
        <div className="flex items-center -ml-8 md:-ml-24">
          <Link href="/" className="relative w-24 h-10 md:h-16 md:w-44">
            <Image 
              src="/IconCrossfit_Logo.png" 
              alt="Icon CrossFit Logo" 
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="justify-center flex-1 hidden md:flex">
          <nav className="flex space-x-4 text-[18px] font-[650] transition md:space-x-8">
            {["ABOUT", "LOCATION", "EVENTS", "CONTACT"].map((item, index) => (
              <Link 
                key={index} 
                href={item === "ABOUT" ? "/" : `/${item.toLowerCase()}`} 
                className={`relative hover:text-gray-600 
                after:absolute after:-bottom-0 after:left-0 after:w-full after:h-[1px] 
                after:opacity-0 after:transition-opacity after:duration-300 
                hover:after:opacity-100 ${isDarkMode ? "after:bg-black text-black" : "after:bg-white text-white"}`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex md:-ml-8 md:pr-5">
          <ThemeToggle />
        </div>

        {/* Register Button */}
        <div className="hidden md:flex mt-3 md:-mr-[38px] md:mt-0">
          <Link href="/register" className={`flex items-center gap-3 px-5 py-[9px] text-[15px] md:text-[16px] transition rounded-2xl bg-gray-700 hover:bg-gray-300 text-white hover:text-black`}>
            <FaArrowTurnDown className="text-xs md:text-sm transform rotate-[-90deg]" />
            Register
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
          <button className="text-2xl">
            <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} isDarkMode={isDarkMode} />
          </button>
        </div>

      </div>
    </header>
  );
}
