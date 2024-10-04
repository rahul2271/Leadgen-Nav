// components/Header.js
'use client'
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Add this function in your component (Header.js or relevant file)
const smoothScroll = (id) => {
  const element = document.querySelector(id);
  const headerOffset = 120; // Adjust based on your fixed header height
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};



  return (
    <header className="bg-[#020a13] md:pt-[50px] fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <img alt="LOGO" className="w-[200px] md:w-[300px]" src="./Logo.png" />
          </div>

          {/* Links for desktop (centered) */}
          <nav className="hidden md:flex space-x-10 flex-1 justify-center">
            <Link href="#home" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link  href="#services-section"  className="text-white hover:text-gray-300">
              Services
            </Link>
            <Link href="#work" className="text-white hover:text-gray-300">
              Process
            </Link>
            <Link href="#about" className="text-white hover:text-gray-300">
              Results
            </Link>
            <Link href="#contact" className="text-white hover:text-gray-300">
              FAQs
            </Link>
          </nav>

          {/* Button on the right */}
          <div className="hidden md:block">
  <button 
    className="px-6 py-2 bg-[#1E3E62] text-white font-bold rounded-lg"
    onClick={() => smoothScroll('#start')}
  >
    Start a project
  </button>
</div>

          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-[#1E3E62]/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transform ${isOpen ? 'rotate-90' : ''} transition-transform duration-300 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

      {/* Mobile menu */}
      {isOpen && (
        <div
          className={`md:hidden bg-[#1E3E62] transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96' : 'max-h-0'
          } overflow-hidden`}
        >
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="#home" className="text-white hover:text-gray-300" onClick={closeMenu}>
              Home
            </Link>
            <Link href="#services-section" className="text-white hover:text-gray-300" onClick={closeMenu}>
              Services
            </Link>
            <Link href="#work" className="text-white hover:text-gray-300" onClick={closeMenu}>
              Process
            </Link>
            <Link href="#about" className="text-white hover:text-gray-300" onClick={closeMenu}>
              Results
            </Link>
            <Link href="#contact" className="text-white hover:text-gray-300" onClick={closeMenu}>
              FAQs
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
