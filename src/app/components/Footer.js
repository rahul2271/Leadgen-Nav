// components/Footer.js
'use client';
import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import Twitter and LinkedIn icons

const Footer = () => {
  return (
    <footer className="bg-[#020a13] text-white py-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-4xl font-bold">
            Let's talk about <span className="text-blue-300">your project</span>
          </h3>
          <p className="text-lg">Sound good? Let's connect!</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-semibold">Connect with us</h4>
          <p>
            <a
              href="mailto:preetpal@leadgennav.com"
              className="flex items-center space-x-2"
            >
              <span>&#9993;</span> <span>preetpal@leadgennav.com</span>
            </a>
          </p>
          <p>
            <a
              href="tel:+919315047766"
              className="flex items-center space-x-2"
            >
              <span>&#128172;</span> <span>+91 931-504-7766</span>
            </a>
          </p>
        </div>
        {/* Add the Follow Us Section with Icons */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Connect with Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://x.com/LeadGenNav"
              className="text-2xl hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter /> {/* Twitter Icon */}
            </a>
            <a
              href="https://www.linkedin.com/in/preetpal-singh-2b1046308/"
              className="text-2xl hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> {/* LinkedIn Icon */}
            </a>
          </div>
        </div>
      </div>
      <p className="text-center pt-[55px] text-[15px]">
        © 2024 LeadGen Nav. All rights reserved.
      </p>
      <p className="hidden md:block text-center pt-[5px] text-[14.5px]">
        Website designed and developed by{' '}
        <Link
          className="font-bold"
          href="https://www.rchauhan.in"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          RC Tech Solutions
        </Link>
      </p>
      <p className="block md:hidden text-center pt-[5px] text-[14.5px]">
        Website designed and developed by{' '}
        <br />
        <Link
          className="font-bold"
          href="https://www.rchauhan.in"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          RC Tech Solutions
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
