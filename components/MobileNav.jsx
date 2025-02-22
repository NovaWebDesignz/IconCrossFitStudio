"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";


const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("menu-open", isOpen);
  };

  const menuItems = [
    { name: "ABOUT", link: "/" },
    { name: "MEMBERSHIP", link: "/membership" },
    { name: "EVENTS", link: "/events" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <nav className="relative z-50">
      {/* Hamburger Menu Button */}
      <button
        className="z-50 flex flex-col justify-between w-8 h-6 hamburger-button sm:flex md:flex lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Navigation"
      >
        <FaBars className="text-2xl text-black" />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "right-0" : "right-[-100%]"
        } rounded-l-3xl flex flex-col justify-center items-center w-72 max-w-sm h-[80vh] overflow-y-auto`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-9 z-60"
          onClick={toggleMenu}
        >
          <img
            src="/images/menu_close_button.png"
            alt="Close"
            className="w-[17px] h-[17px]"
          />
        </button>

        {/* Centered Menu Items */}
        <ul className="flex flex-col items-center justify-center gap-6 p-4 text-center">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="text-lg font-medium text-black transition-colors duration-300 hover:text-purple-500"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
