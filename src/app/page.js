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
import PartnerSection from './components/Partner';
import Testimonial from './components/testimo';



const Hero = () => {
  return (
    <>

    <Home/>
    <div className='md:mt-[-100px] mt-[-110px] pb-[50px]'>
    < LogoMarquee/>
    </div>
    <Image alt='bg' className='z-[-1] mx-auto w-max place-content-center' width={1500} height={700} src='/bf1.jpg'/>
    <Timeline/>
    <h2 className="md:mt-[150px] container mx-auto text-center text-white md:text-[55px] text-[25px] font-bold mb-4">We Got 70+ appointments for one of our clients in just 14 days</h2>
    <Image alt='bg' className='z-[-1] mx-auto w-max place-content-center' width={1500} height={700} src='/tedrr.webp'/>

    <CustomSection/>
    <Services/>
    <PartnerSection/>
    <AnimatedSection/>
    <Testimonials/>
    <Testimonial/>
    <FAQAndScheduleSection/>
    
    
    </>
  );
};

export default Hero;
