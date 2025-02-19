import { FaArrowTurnDown } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:max-w-[85%] mx-auto rounded-xl bg-gray-900 shadow-lg">
      <div className="flex flex-col items-center justify-between w-full px-6 py-4 md:flex-row md:px-12">
        
        {/* Logo - Left */}
        <div className="flex items-center md:-ml-11">
          <Link href="/" className="relative h-14 w-36 md:h-16 md:w-44">
            <Image 
              src="/IconCrossfit_Logo.png" 
              alt="Icon CrossFit Logo" 
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navigation Links - Centered */}
        <div className="justify-center flex-1 hidden md:flex">
          <nav className="flex space-x-4 text-sm font-light text-white transition md:space-x-8">
            {["HOME", "ABOUT", "LOCATION", "PLANS", "EVENTS"].map((item, index) => (
              <Link 
                key={index} 
                href={`/${item.toLowerCase()}`} 
                className="relative hover:text-gray-300 
                after:absolute after:-bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white 
                after:opacity-0 after:transition-opacity after:duration-300 
                hover:after:opacity-100"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* Register Button - Right */}
        <div className="mt-3 md:mt-0">
          <Link href="/register" className="flex items-center gap-3 px-5 py-[9px] text-[15px] md:text-[16px] text-gray-900 transition rounded-3xl 
                 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-yellow-500 hover:to-orange-500">
            {/* Rotated Arrow Icon */}
            <FaArrowTurnDown className="text-xs md:text-sm text-[#373737] transform rotate-[-90deg]" />
            Register
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
