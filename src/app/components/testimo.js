"use client";
import React, { useState, useEffect } from 'react';

const testimonials = [
  { text: 'I have been a client of LeadGen Nav for a bit less than a year. During this time, we generated over a hundred meetings that resulted in 14 client projects and over $350k generated.', author: 'Niklas Konstantin Rabanus, CEO at KONUS' },
  { text: 'LGN is a lead generation wizard! Thanks to his skills, I was able to land big contracts with important affiliates for Podly. Highly recommend his services!', author: 'Loïc R., Founder & CEO at Podly' },
  { text: 'A real pleasure to work with LeadGen Nav and learn from them. Very intelligent guys, recommend him highly 👍', author: 'Amme Altimimi, We Quest' },
  { text: 'I wanted to express my gratitude to Preetpal for being an amazing mentor who has greatly assisted me in mastering prospecting tools. His support has had a significant impact on enhancing my skills.', author: 'Oceane Demol, GrowthFlow Agency' },
  { text: 'LeadGen Nav team excels at creating value-first offers. They are true cold email operators with thousands of emails under their belt.', author: 'Ben Crane, Founder' },
];

const Testimonial = () => {
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);
  const [marqueeActive, setMarqueeActive] = useState(true);
  
  // Handle the drag start
  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
    setMarqueeActive(false); // Stop the marquee when dragging starts
  };

  // Handle drop event
  const handleDrop = (event) => {
    event.preventDefault();
    setDraggedItemIndex(null); // Reset dragged index
    setMarqueeActive(true); // Restart marquee
  };

  // Allow drop event
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Reset the dragged item index when not dragging
  useEffect(() => {
    if (draggedItemIndex === null) {
      setMarqueeActive(true); // Restart marquee when not dragging
    }
  }, [draggedItemIndex]);

  return (
    <>
      <h2 className="md:mt-[-150px] mt-[-250px] container mx-auto text-center text-white md:text-[55px] text-[30px] font-bold mb-4">Our Testimonials</h2>

      <div className="mt-[20px] relative flex items-center justify-center overflow-hidden py-20 bg-transparent">
        
        {/* Testimonials container */}
        <div className={`flex space-x-8 ${marqueeActive ? 'animate-marquee' : ''}`} style={{ opacity: 1, filter: 'none' }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="flex-none w-80 p-6 rounded-lg shadow-lg cursor-pointer"
              style={{ backgroundColor: '#ffffff', opacity: 1, color: '#000000' }} // Enforcing styles here
            >
              {/* Testimonial Text */}
              <p className="text-lg italic mb-4 leading-relaxed whitespace-normal break-words">
                “{testimonial.text}”
              </p>
              {/* Author */}
              <p className="text-gray-600 mt-4">— {testimonial.author}</p>
            </div>
          ))}
        </div>

        {/* Gradient overlays for visual effect */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Left Gradient Overlay */}
          <div className="absolute left-0 top-0 w-1/12 h-full bg-gradient-to-r from-[#020a13] to-transparent pointer-events-none"></div>
          {/* Right Gradient Overlay */}
          <div className="absolute right-0 top-0 w-1/12 h-full bg-gradient-to-l from-[#020a13] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
