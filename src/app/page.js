// components/Hero.js
import LogoMarquee from './components/LogoMarquee';
import React from 'react';
import Link from 'next/link';
import Timeline from './components/Timel';
import Home from './components/Home';
import Image from 'next/image';
import Testimonials from './components/Testimonials';

const Hero = () => {
  return (
    <>

    <Home/>
    <div className='md:mt-[-100px] mt-[-300px] pb-[50px]'>
    < LogoMarquee/>
    </div>
    <Image alt='bg' className='mx-auto w-max place-content-center' width={1500} height={700} src='/bf1.jpg'/>
    <Timeline/>
    <Testimonials/>
    </>
  );
};

export default Hero;
