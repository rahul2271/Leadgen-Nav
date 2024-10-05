// "use client";
// import React, { useState, useEffect, useRef } from 'react';

// const testimonials = [
//   { text: 'I have been a client of LeadGen Nav for a bit less than a year. During this time, we generated over a hundred meetings that resulted in 14 client projects and over $350k generated.', author: 'Niklas Konstantin Rabanus, CEO at KONUS' },
//   { text: 'LGN is a lead generation wizard! Thanks to his skills, I was able to land big contracts with important affiliates for Podly. Highly recommend his services!', author: 'Loïc R., Founder & CEO at Podly' },
//   { text: 'A real pleasure to work with LeadGen Nav and learn from them. Very intelligent guys, recommend him highly 👍', author: 'Amme Altimimi, We Quest' },
//   { text: 'I wanted to express my gratitude to Preetpal for being an amazing mentor who has greatly assisted me in mastering prospecting tools. His support has had a significant impact on enhancing my skills.', author: 'Oceane Demol, GrowthFlow Agency' },
//   { text: 'LeadGen Nav team excels at creating value-first offers. They are true cold email operators with thousands of emails under their belt.', author: 'Ben Crane, Founder' },
// ];

// const Testimonial = () => {
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStartPosition, setDragStartPosition] = useState(0); // Initial mouse position when dragging starts
//   const [offset, setOffset] = useState(0); // Current offset for dragging the whole group
//   const containerRef = useRef(null); // Reference to the testimonials container
//   const containerWidth = 400; // Set a fixed width for the container

//   const handleMouseDown = (event) => {
//     setIsDragging(true);
//     setDragStartPosition(event.clientX); // Set the initial mouse position
//     document.body.style.cursor = 'grabbing'; // Change cursor to grabbing
//   };

//   const handleMouseMove = (event) => {
//     if (!isDragging) return; // If not dragging, do nothing

//     const dx = event.clientX - dragStartPosition; // Calculate how far the mouse has moved
//     const newOffset = offset + dx; // Update the new offset

//     // Ensure the testimonials stay within bounds
//     const maxOffset = 0; // Right limit (0 means fully visible on the right)
//     const minOffset = -(containerWidth); // Left limit (container width to the left)
    
//     // Apply boundaries
//     if (newOffset > maxOffset) {
//       setOffset(maxOffset);
//     } else if (newOffset < minOffset) {
//       setOffset(minOffset);
//     } else {
//       setOffset(newOffset); // Update offset if within bounds
//     }

//     setDragStartPosition(event.clientX); // Update the starting position for the next move
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false); // Reset dragging state
//     document.body.style.cursor = 'default'; // Change cursor back to default
//   };

//   useEffect(() => {
//     // Attach mouse move and mouse up event listeners
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseup', handleMouseUp);

//     return () => {
//       // Clean up event listeners on unmount
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [isDragging]); // Run when dragging state changes

//   return (
//     <>
//       <h2 className="md:mt-[-150px] mt-[-250px] container mx-auto text-center text-white md:text-[55px] text-[30px] font-bold mb-4">Our Testimonials</h2>

//       <div className="mt-[20px] relative overflow-hidden py-20 bg-transparent">
//         {/* Testimonials container */}
//         <div
//           ref={containerRef}
//           className="flex space-x-8 cursor-grab"
//           style={{
//             transform: `translateX(${offset}px)`, // Apply offset to move the group
//             transition: 'transform 0.1s ease-out', // Smooth transition while dragging
//             width: `${containerWidth}px`, // Fixed width for the container
//           }}
//           onMouseDown={handleMouseDown} // Start dragging on mouse down
//         >
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="flex-none w-80 p-6 rounded-lg shadow-lg"
//               style={{ backgroundColor: '#ffffff', opacity: 1, color: '#000000' }} // Enforcing styles here
//             >
//               {/* Testimonial Text */}
//               <p className="text-lg italic mb-4 leading-relaxed whitespace-normal break-words">
//                 “{testimonial.text}”
//               </p>
//               {/* Author */}
//               <p className="text-gray-600 mt-4">— {testimonial.author}</p>
//             </div>
//           ))}
//         </div>

//         {/* Gradient overlays for visual effect */}
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Left Gradient Overlay */}
//           <div className="absolute left-0 top-0 w-1/12 h-full bg-gradient-to-r from-[#020a13] to-transparent pointer-events-none"></div>
//           {/* Right Gradient Overlay */}
//           <div className="absolute right-0 top-0 w-1/12 h-full bg-gradient-to-l from-[#020a13] to-transparent pointer-events-none"></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonial;


// components/Testimonials.js
"use client"
import React from 'react';

const testimonials = [
  { text: 'I have been a client of LeadGen Nav for a bit less than a year. During this time, we generated over a hundred meetings that resulted in 14 client projects and over $350k generated.', author: 'Niklas Konstantin Rabanus, CEO at KONUS' },
  { text: 'LGN is a lead generation wizard! Thanks to his skills, I was able to land big contracts with important affiliates for Podly. Highly recommend his services!', author: 'Loïc R., Founder & CEO at Podly' },
  { text: 'A real pleasure to work with LeadGen Nav and learn from them. Very intelligent guys, recommend him highly 👍', author: 'Amme Altimimi, We Quest' },
  { text: 'I wanted to express my gratitude to Preetpal for being an amazing mentor who has greatly assisted me in mastering prospecting tools. His support has had a significant impact on enhancing my skills.', author: 'Oceane Demol, GrowthFlow Agency' },
  { text: 'LeadGen Nav team excels at creating value-first offers. They are true cold email operators with thousands of emails under their belt.', author: 'Ben Crane, Founder' },
];

const Testimonials = () => {
  return (
    <div className="mt-[-300px] bg-transparent p-6 rounded-lg text-white">
      <h2 className="text-[25px] md:text-[55px] text-center font-bold mb-4">What Our Clients Say</h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="min-w-[400px] p-10 bg-white text-black rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <p className="mb-2">"{testimonial.text}"</p>
            <h4 className="font-semibold">- {testimonial.author}</h4>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
