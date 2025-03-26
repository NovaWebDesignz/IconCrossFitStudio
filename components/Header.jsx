"use client";

import React, { useState } from "react";
import { FaArrowTurnDown } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed -top-1 z-50 w-full bg-sky-300 shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-6 md:py-5 md:px-20">
        
        {/* Logo */}
        <div className="flex items-center -ml-8 md:-ml-24">
          <Link href="/" className="relative w-32 h-16 md:h-20 md:w-48">
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
        <nav className="hidden md:flex flex-1 justify-center space-x-8 text-[18px] font-[650] transition">
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

        {/* Theme Toggle + Register/Mobile Menu */}
        <div className="flex items-center gap-5">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Register Button (Visible on lg and above) */}
          <div className="hidden lg:flex">
            <Link
              href="/register"
              className="flex items-center gap-3 px-5 py-[9px] text-[15px] lg:text-[16px] transition rounded-2xl bg-gray-700 hover:bg-gray-300 text-white hover:text-black"
            >
              <FaArrowTurnDown className="text-xs lg:text-sm transform rotate-[-90deg]" aria-label="Open Register Page" />
              Register
            </Link>
          </div>

          {/* Mobile Menu (Visible only on small screens) */}
          <div className="flex lg:hidden">
            <button className="text-2xl" aria-label="Open mobile menu">
              <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} isDarkMode={isDarkMode} />
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
