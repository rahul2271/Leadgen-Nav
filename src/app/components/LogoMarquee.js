// components/LogoMarquee.js
'use client'
import React from 'react';
// import Image from 'next/image';

const logos = [
  '/1.png', // Replace with your actual logo paths
  '/2.png',
  '/3.png',
  '/4.png',
  '/5.png',
  '/6.png',
];

const LogoMarquee = () => {
  return (
    <>
        <h2 className="md:mt-[50px] mt-[-250px] container mx-auto text-center text-white md:text-[55px] text-[20px] font-bold mb-4">Brands we have connected our Clients with</h2>

    <div className="opacity-50 md:mt-[50px] overflow-hidden">
      <div className="flex animate-marquee">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-[50px]">
            <img src={logo} alt={`Logo ${index}`} className="h-8" />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default LogoMarquee;
