// components/LogoMarquee.js
'use client'
import React from 'react';
import Image from 'next/image';

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
    <div className="overflow-hidden">
      <div className="flex animate-marquee">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-[50px]">
            <Image width={200} height={200} src={logo} alt={`Logo ${index}`} className="h-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
