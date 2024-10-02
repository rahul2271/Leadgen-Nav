// components/Footer.js
'use client'
import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0B192C] to-[#1E3E62]/1 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-4xl font-bold">Lets talk about <span className="text-blue-300">your project</span></h3>
          <p className="text-lg">Sound good? Lets connect!</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-semibold">Connect with us</h4>
          <p><a href="mailto:hello@brandmode.com" className="flex items-center space-x-2">
            <span>&#9993;</span> <span>hello@brandmode.com</span></a></p>
          <p><a href="tel:+18888075000" className="flex items-center space-x-2">
            <span>&#128172;</span> <span>(888) 807-5000</span></a></p>
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-semibold">Address</h4>
          <p className="flex items-center space-x-2">
            <span>&#127759;</span> 
            <span>123 Innovation Avenue, Suite 400<br />Creativity District, Metropolis City, CA 90210</span>
          </p>
          <p className="flex items-center space-x-2">
            <span>&#128337;</span> <span>Monday → Friday 9am to 5pm</span>
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Follow us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300">Facebook</a>
            <a href="#" className="hover:text-blue-300">Twitter</a>
            <a href="#" className="hover:text-blue-300">Instagram</a>
            <a href="#" className="hover:text-blue-300">LinkedIn</a>
          </div>
          <h4 className="text-xl font-semibold">Join our newsletter</h4>
          <form className="flex">
            <input type="email" placeholder="Email Address" className="px-4 py-2 text-black rounded-l-md"/>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md">→</button>
          </form>
        </div>
      </div>
      <p className='text-center mt-[55px] text-[12px]'>
        Website designed and developed by{' '}
        <Link href="https://www.rchauhan.in" passHref
         target="_blank" rel="noopener noreferrer">RC Tech Solutions
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
