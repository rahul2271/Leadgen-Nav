// components/Hero.js
import LogoMarquee from './components/LogoMarquee';
import React from 'react';
import Link from 'next/link';
import Timeline from './components/Timel';
import Home from './components/Home';
import Image from 'next/image';

const Hero = () => {
  return (
    <>

    <Home/>
    <div className='mt-[-100px] pb-[50px]'>
    < LogoMarquee/>
    </div>
    <Image alt='bg' width={1500} height={700} src='/bf1.jpg'/>
    <Timeline/>
    </>
  );
};

export default Hero;
