"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use usePathname from next/navigation

const Navbar = () => {
  const pathname = usePathname(); // Get the current path

  // Check if the current route is the home page
  const isHomePage = pathname === '/';

  return (
    <>
      <nav className={`${isHomePage ? '' : 'sticky top-0'} z-50 bg-black p-2`}>
        <div className="max-w-full px-10 mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="./images/pravaasa.png" alt="companylogo" width={70} />
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/destinations"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Destinations
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
