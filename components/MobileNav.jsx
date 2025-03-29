"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { FaArrowTurnDown } from "react-icons/fa6";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";

const links = [
    {
        name: 'About',
        path: '/',

    },
    {
        name: 'Location',
        path: '/location',
    },
    {
        name: 'Events',
        path: '/events',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
];

const MobileNav = ({ isDarkMode }) => {
    const pathname = usePathname();
    return (
      <Sheet>
        <SheetTrigger className="flex items-center justify-center">
          {/* Change color based on theme */}
          <FaBarsStaggered 
            className={`text-[29px] ${isDarkMode ? "text-black" : "text-white"}`} 
            style={{ strokeWidth: "1%", fontWeight: "70" }} 
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          {/* Logo */}
          <div className="mt-32 mb-20 text-2xl text-center">
            <Link href="/">
              <h1 className="text-4xl font-bold">Icon CrossFit<span className="text-black">.</span></h1>
            </Link>
          </div>
          {/* Nav */}
          <nav className="flex flex-col items-center justify-center gap-8">
            {links.map((link, index) => (
              <Link 
                href={link.path} 
                key={index} 
                className={`${link.path === pathname ? "text-black border-b-2 border-white" : ""} text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          {/* Register Button (Visible on lg and above) */}
          <div className="mt-2 flex justify-center">
            <Link
              href="/register"
              className="flex items-center gap-3 px-5 py-[9px] text-[15px] lg:text-[16px] transition rounded-2xl bg-gray-700 hover:bg-gray-300 text-white hover:text-black"
            >
              <FaArrowTurnDown className="text-xs lg:text-sm transform rotate-[-90deg]" aria-label="Open Register Page" />
              Register
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    );
};
  
export default MobileNav;