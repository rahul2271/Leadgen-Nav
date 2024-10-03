// components/Hero.js
import LogoMarquee from './components/LogoMarquee';
import React from 'react';
import Link from 'next/link';
import Timeline from './components/Timel';
import Home from './components/Home';
import Image from 'next/image';
import Testimonials from './components/Testimonials';
import CustomSection from './components/whothisisfor';
import Services from './components/Services';
import AnimatedSection from './components/Process';
import FAQAndScheduleSection from './components/FaqCalendly';


const Hero = () => {
  return (
    <>

    <Home/>
    <div className='md:mt-[-100px] pb-[50px]'>
    < LogoMarquee/>
    </div>
    <Image alt='bg' className='z-[-1] mx-auto w-max place-content-center' width={1500} height={700} src='/bf1.jpg'/>
    <Timeline/>
    <Testimonials/>
    <CustomSection/>
    <Services/>
    <AnimatedSection/>
    <FAQAndScheduleSection/>
    </>
  );
};

export default Hero;
