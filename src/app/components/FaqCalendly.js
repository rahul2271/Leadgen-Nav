"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FAQAndScheduleSection() {
  // FAQs Data
  const faqs = [
    {
      question: 'How do you ensure success for your clients?',
      answer: 'We are committed to delivering exceptional results. We take on only a few clients each month, carefully selecting clients we are confident we can support with a 100% success rate. Our approach is grounded in a tried-and-tested model, backed by a track record that speaks for itself.',
    },
    {
      question: 'How do you balance client growth?',
      answer: 'Your success is our success. We position our client partners at the center of our growth strategy. We have invested in top-notch operations and marketing resources to ensure we provide unwavering support to our clients.',
    },
    {
      question: 'What happens if the outbound strategy doesn’t work?',
      answer: 'We replicate a proven model, invest in the partnership, and guarantee your satisfaction. In the unlikely event that challenges arise, we are dedicated to working together to find solutions and ensure your success. We will work with your team until we are able get you the desired results.',
    },
    {
      question: 'Is outbound cold email still effective?',
      answer: 'While many have tried and struggled with cold emailing, we have perfected the art. Email marketing, especially for B2B sales, remains highly effective when executed correctly. Our clients boast an impressive 70% open rate as an average across the board. Cold email is more potent than ever, and we have the expertise to harness its power for your business.',
    },
    {
      question: 'What is required from clients?',
      answer: 'A minimal and strategic investment of your time 0-3 Months Audit current systems, gather information on target clients, create an offer overview, and participate in generating new pipeline.'
    },
    {
      question: 'What does this partnership entail',
      answer: 'We learn, work, and collaborate seamlessly with your team, sharing knowledge while maintaining accountability as partners committed to delivering results. We assist in building and expanding your business in exchange for a share in the success.',
    },
    {
      question: 'How much of a time commitment is required?',
      answer: 'We are fully committed to your success and will invest as much time as necessary to achieve the desired results. As dedicated partners, we complete all tasks without excuses, ensuring your objectives are met.',
    },
    // Add more FAQ items as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Handle selecting FAQ
  const selectFAQ = (index) => {
    setActiveIndex(index);
  };

  // Calendly Widget Integration with useEffect
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup the script when component unmounts
    };
  }, []);

  return (
    <div className="bg-[#020a13] mt-[-250px] md:mt-[20px] text-white min-h-screen flex flex-col items-center justify-center">
      {/* FAQ Section */}
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row justify-center items-start">
          {/* Left Side: FAQ Questions */}
          <div className="w-full lg:w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-8">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`cursor-pointer py-4 border-b-2 ${
                    activeIndex === index
                      ? 'text-white font-semibold border-white'
                      : 'text-gray-400 border-gray-700'
                  }`}
                  onClick={() => selectFAQ(index)}
                >
                  {faq.question}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: FAQ Answers with Animation */}
          <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 bg-[#1E3E62]/50 rounded-lg shadow-lg"
            >
              <h3 className="text-3xl font-bold mb-4">{faqs[activeIndex].question}</h3>
              <p className="text-gray-400">{faqs[activeIndex].answer}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Schedule a Call Section */}
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row justify-center items-start">
          {/* Left Side: Call to Action */}
          <div className="w-full lg:w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-8">Schedule a Call</h2>
            <p className="text-gray-400 mb-4">
              Schedule a discovery call with us to explore tailored B2B outbound strategies and discuss how we can help you grow.
            </p>
          </div>

          {/* Right Side: Calendly Integration */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              {/* Calendly inline widget */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/leadgenav/discovery?hide_gdpr_banner=1"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

