'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  "t1.jpg",
  "t2.jpg",
  "t3.jpg",
  "t4.jpg",
  "t5.jpg",
  "t6.jpg",
  "t7.jpg",
  "t8.jpg",
  "t9.jpg",
  "t100.jpg",


  // Add more images here
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <h2 className="text-white font-bold text-center text-[35px] md:text-[45px] md:mt-[70px] mt-[25px]">Look at all these fingers we got bending</h2>
    <h2 className="text-white/50 font-regular text-center text-[15px] md:text-[25px] md:mt-[10px] mt-[10px]">(real replies from prospects in our clients campaigns)</h2>
    <div className="shadom-md flex justify-center items-center mt-[30px] md:mt-[50px] ">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center items-center"
      >
        <img
          src={testimonials[currentIndex]}
          alt={`Testimonial ${currentIndex + 1}`}
          className="rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-lg"
        />
      </motion.div>
    </div>
    </>
  );
};

export default Testimonials;
