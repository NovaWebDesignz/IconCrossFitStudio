import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full text-white bg-gray-900 shadow-md">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-sky-400">Icon Gym</div>

        {/* Navigation Links */}
        <nav className="hidden space-x-8 md:flex">
          <Link href="/" className="text-xl transition duration-200 hover:text-gray-300">Home</Link>
          <Link href="/about" className="text-xl transition duration-200 hover:text-gray-300">About</Link>
          <Link href="/location" className="text-xl transition duration-200 hover:text-gray-300">Location</Link>
          <Link href="/plans" className="text-xl transition duration-200 hover:text-gray-300">Plans</Link>
          <Link href="/events" className="text-xl transition duration-200 hover:text-gray-300">Events</Link>
        </nav>

        {/* Register Button */}
        <Link href="/register" className="px-4 py-2 text-lg text-gray-900 transition duration-200 rounded-lg bg-sky-400 hover:bg-yellow-600">
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
