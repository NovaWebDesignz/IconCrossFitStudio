import { FaArrowTurnDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-[95%] md:max-w-[85%] mx-auto rounded-2xl bg-white/30 backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between w-full px-6 py-[6px] md:px-12">
        
        {/* Logo - Left */}
        <div className="flex items-center -ml-10 md:-ml-24">
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

        {/* Navigation Links - Centered (Hidden on small screens) */}
        <div className="justify-center flex-1 hidden md:flex">
          <nav className="flex space-x-4 text-[13px] font-light text-white transition md:space-x-8">
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

        {/* Register Button - Right (Hidden on small screens) */}
        <div className="hidden md:flex mt-3 md:-mr-[38px] md:mt-0">
          <Link href="/register" className="flex items-center gap-3 px-5 py-[9px] text-[15px] md:text-[16px] text-gray-900 transition rounded-2xl 
                 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-yellow-500 hover:to-orange-500">
            {/* Rotated Arrow Icon */}
            <FaArrowTurnDown className="text-xs md:text-sm text-[#373737] transform rotate-[-90deg]" />
            Register
          </Link>
        </div>

        {/* Hamburger Menu - Visible on small screens, placed on the right */}
        <div className="flex items-center md:hidden">
          <button className="text-2xl text-white">
            <RxHamburgerMenu />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
