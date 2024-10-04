"use client"
import { useEffect, useRef, useState } from 'react';

export default function ScrollSectionWithSubheadings() {
  const sections = [
    {
      id: 1,
      title: 'Building Your Custom Outbound Strategy',
      subheadings: [
        'Client Onboarding Documentation:We start by gathering all necessary information about your business to ensure a seamless integration.',
        '‍Current System Audit:‍Our team conducts a thorough review of your existing systems to identify areas for improvement.',
        'Messaging + Offer Optimization:We refine your messaging and offers to ensure they resonate with your target audience.',
        'Understand your Buyer Persona:We help you fine-tune your buyer personas and expand your ICP market reach',
        'Technical Outbound System Setup:‍Our experts set up and optimize outbound systems tailored to your business needs.',
      ],
    },
    {
      id: 2,
      title: 'Compile Data-Based and Refine Buyer Persona',
      subheadings: [
        'Building Custom Lead List:We gather and analyze data to ensure our strategies align with your ideal customer profile, and build your custom prospecting lead list.'
      ],
    },
    {
      id: 3,
      title: 'Custom Outreach Integrations',
      subheadings: [
        'Working in Parallel with Your Systems:‍Our solutions are integrated seamlessly with your existing systems, enhancing efficiency without disruption.',
      ],
    },
    {
      id: 4,
      title: 'Analyze Market Feedback & Optimize Outreach System',
      subheadings: [
        'Strategy Optimization:We continuously analyze market feedback and optimize our strategy, including messaging, channels, and automations, for maximum pipeline growth.',
      ],
    },
    {
      id: 5,
      title: 'On Going Opportunities & Expansion',
      subheadings: [
        'Sales Enablement:We provide training and develop Standard Operating Procedures (SOPs) to empower your sales team.',
        'Fractional Sales Development Representative:‍Our services include the development and placement of fractional SDRs to augment your sales efforts.'
      ],
    },
  ];

  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  // Customizable spacing for sections (sets of subheadings)
  const sectionSpacing = 'space-y-[-200px]'; // Adjust this to control the gap between different sections

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
