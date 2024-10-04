"use client"
import { useEffect, useRef, useState } from 'react';

export default function ScrollSectionWithSubheadings() {
  const sections = [
    {
      id: 1,
      title: 'Heading 1',
      subheadings: [
        'Subheading 1.1: Detailed description for subheading 1.1.',
        'Subheading 1.2: Detailed description for subheading 1.2.',
      ],
    },
    {
      id: 2,
      title: 'Heading 2',
      subheadings: [
        'Subheading 2.1: Detailed description for subheading 2.1.',
        'Subheading 2.2: Detailed description for subheading 2.2.',
        'Subheading 2.3: Detailed description for subheading 2.3.',
      ],
    },
    {
      id: 3,
      title: 'Heading 3',
      subheadings: [
        'Subheading 3.1: Detailed description for subheading 3.1.',
      ],
    },
  ];

  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  // Customizable spacing for sections (sets of subheadings)
  const sectionSpacing = 'space-y-[-300px]'; // Adjust this to control the gap between different sections

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
    <h2 className="text-3xl md:mt-[70px] md:text-5xl text-center text-white font-bold mb-4">Process</h2>
    
    
    <div className="flex mt-[-250px] md:mt-[-150px] flex-row min-h-screen">
    
      
      {/* Left Side: Headings */}
      <div className="sticky top-0 h-screen w-1/3 bg-transparent text-white flex flex-col justify-center p-8">
        {sections.map((section, index) => (
          <div key={section.id} className={`mb-8 transition-all duration-300 ${activeSection === index ? 'text-white font-bold text-2xl' : 'text-gray-400'}`}>
            {section.title}
          </div>
        ))}
      </div>

      {/* Right Side: Subheadings */}
      <div className={`w-2/3 p-8 ${sectionSpacing}`}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="min-h-screen flex flex-col justify-center space-y-4" // Internal spacing between subheadings remains the same
          >
            {section.subheadings.map((subheading, subIndex) => (
              <div
                key={subIndex}
                className="bg-white shadow-lg p-6 rounded-lg"
              >
                <h4 className="text-lg font-semibold">{subheading.split(':')[0]}</h4>
                <p className="text-gray-700">{subheading.split(':')[1]}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
