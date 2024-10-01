// components/Hero.js
import LogoMarquee from './components/LogoMarquee';
import React from 'react';
import Link from 'next/link';
import Timeline from './components/Timel';

const Hero = () => {
  return (
    <>

    <section className="bg-black min-h-screen text-white flex items-center ">
      <div className="container mx-auto px-8 md:px-5 lg:px-24">


        {/* Hero Content */}
        <div className="mt-2 mx-auto md:w-max place-content-center">
          <div className="text-blue-300 bg-blue-800  px-4 py-2 mx-auto w-max place-content-center rounded-full font-medium">
            👋 WELCOME BRANDMODE
          </div>
          <h1 className="mt-6 text-5xl text-center lg:text-7xl font-extrabold leading-tight">
            We build <span className="text-blue-300">Outbound Systems</span> <br />
            That  <span className="text-blue-300">sells for you.</span>
          </h1>
          <button href='./' className='px-4 py-1 mt-[10px] bg-gradient-to-r from-blue-500 to-blue-300 text-black font-medium rounded-md mx-auto block text-center text-lg'>
          Schedule a call
          </button>
        </div>
      </div>
      
    </section>
    <div className='mt-[-100px] pb-[200px]'>
    < LogoMarquee/>
    </div>
    <img src='./bf1.jpg'/>
    <Timeline/>
    </>
  );
};

export default Hero;
