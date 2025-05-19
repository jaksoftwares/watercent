"use client";

import Link from "next/link";
import { useState } from "react";
// import Image from "next/image";
import { usePathname } from "next/navigation"; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route path

  const activeLinkClass = "text-yellow-400 font-semibold";
  const hoverClass = "hover:text-yellow-300 transition";

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="bg-blue-600 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/" className="text-white flex items-center">
              {/* <Image
                width={100}
                height={30}
                src="/assets/logo.png"
                alt="WaterCent"
                className="h-8 mr-2"
              /> */}
              <span className="text-2xl font-bold">WaterCent</span> {/* Text logo */}
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={`${pathname === "/" ? activeLinkClass : ""} ${hoverClass}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${pathname === "/about" ? activeLinkClass : ""} ${hoverClass}`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`${pathname === "/services" ? activeLinkClass : ""} ${hoverClass}`}
            >
              Services
            </Link>
            <Link
              href="/order"
              className={`${pathname === "/order" ? activeLinkClass : ""} ${hoverClass}`}
            >
              Order
            </Link>
            <Link
              href="/contact"
              className={`${pathname === "/contact" ? activeLinkClass : ""} ${hoverClass}`}
            >
              Contact
            </Link>
            <Link
              href="/order"
              className="text-white bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600 transition"
            >
              Order Now
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700 text-white p-4 absolute w-full top-16 left-0 z-40">
          <nav className="space-y-4">
            <Link
              href="/"
              onClick={handleLinkClick} // Close the menu when clicked
              className={`${pathname === "/" ? activeLinkClass : ""} block`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={handleLinkClick} // Close the menu when clicked
              className={`${pathname === "/about" ? activeLinkClass : ""} block`}
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={handleLinkClick} // Close the menu when clicked
              className={`${pathname === "/services" ? activeLinkClass : ""} block`}
            >
              Services
            </Link>
            <Link
              href="/order"
              onClick={handleLinkClick} // Close the menu when clicked
              className={`${pathname === "/order" ? activeLinkClass : ""} block`}
            >
              Order
            </Link>
            <Link
              href="/contact"
              onClick={handleLinkClick} // Close the menu when clicked
              className={`${pathname === "/contact" ? activeLinkClass : ""} block`}
            >
              Contact
            </Link>
            <Link
              href="/order"
              onClick={handleLinkClick} // Close the menu when clicked
              className="block text-center text-white bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
