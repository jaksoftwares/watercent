"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/" className="text-white">
              <Image
                width={100}
                height={8}          
              src="/assets/logo.png" alt="WaterCent" className="h-8" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-200">Home</Link>
            <Link href="/about" className="hover:text-blue-200">About</Link>
            <Link href="/services" className="hover:text-blue-200">Services</Link>
            <Link href="/order" className="hover:text-blue-200">Order</Link>
            <Link href="/contact" className="hover:text-blue-200">Contact</Link>
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
        <div className="md:hidden bg-blue-700 text-white p-4">
          <nav className="space-y-4">
            <Link href="/" className="block">Home</Link>
            <Link href="/about" className="block">About</Link>
            <Link href="/services" className="block">Services</Link>
            <Link href="/order" className="block">Order</Link>
            <Link href="/contact" className="block">Contact</Link>
            <Link
              href="/order"
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
