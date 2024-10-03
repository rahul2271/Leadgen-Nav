"use client"
import React from 'react';

export default function Services() {
  return (
    <div className="min-h-screen bg-[#020a13] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Sticky after reaching below the header */}
          <div className="md:w-1/3 sticky md:top-[120px] top-[75px] h-fit">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl text-[#020a13] font-bold mb-4">Our Services</h2>
              <p className="text-[#020a13]">
                Partner with us for immediate sales enhancements and streamlined outreach. Lay the groundwork for sustained B2B success and transformative growth.
              </p>
            </div>
          </div>

          {/* Right Side - Scrollable */}
          <div className="md:w-2/3 mt-8 md:mt-0 md:ml-12 space-y-8 ">
            <div className="bg-[#1E3E62]/50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Consultative Audits and Market Positioning</h3>
              <p className="text-gray-400">
                We offer consultative advising for optimal market fit. Conducting thorough audits, our team aligns strategies with your business goals.
              </p>
            </div>
            <div className="bg-[#1E3E62]/50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Custom Sales Systems and Outreach Methods</h3>
              <p className="text-gray-400">
                We specialize in crafting bespoke sales systems and tailored outreach methods, ensuring your message resonates strongly with your target audience.
              </p>
            </div>
            <div className="bg-[#1E3E62]/50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Streamlining Sales with Automation and Integration</h3>
              <p className="text-gray-400">
                Deploying cutting-edge internal tools and automations, we streamline your sales processes, empowering you to prioritize growth and scalability.
              </p>
            </div>
            <div className="bg-[#1E3E62]/50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Systemizing Outreach for Scalability and Personalization</h3>
              <p className="text-gray-400">
                Balancing systematic efficiency with a personalized touch, our outreach approach scales your efforts, making clients feel valued and understood.
              </p>
            </div>
            <div className="bg-[#1E3E62]/50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Creating SOPs and Sales Enablement Material</h3>
              <p className="text-gray-400">
                Crafting detailed Standard Operating Procedures (SOPs) and sales enablement materials, we empower your team with the knowledge and tools for lasting success.
              </p>
            </div>
            <div className="bg-[#1E3E62]/50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Sales Representative Training & Placement</h3>
              <p className="text-gray-400">
                From sales enablement training to fractional representative placement, our services ensure a skilled and culturally aligned sales team driving your company ethos and objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
