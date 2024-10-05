'use client'
import React from 'react';
import next from 'next';

const CustomSection = () => {
  return (
    <section className="bg-[#020a13] md:mt-[-200px] mt-[-300px] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Who This is For</h2>
          <p className="text-white/50 text-[10px] md:text-[15px] max-w-2xl mx-auto">
            Customized outbound solution to seamlessly streamline your sales department operations. 
            Our tailored outbound model precisely aligns with your existing system and seamlessly integrates with your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Card */}
          <div className="p-6 bg-[#1E3E62]/50 hover:bg-white hover:text-[#1E3E62]  rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Custom Outbound Solution</h3>
            <p>We tailor custom sales systems that seamlessly integrate with your internal processes. We provide constant iterations, ensuring your system evolves to meet your unique needs.</p>
          </div>

          {/* Second Card */}
          <div className="p-6 bg-[#1E3E62]/50 hover:bg-white hover:text-[#1E3E62]  rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Increase Top-of-Funnel Pipeline</h3>
            <p>Drive more volume with our outbound methods. Our techniques not only secure placement in your prospects inboxes but also guarantee the seamless delivery of emails without deliverability issues.</p>
          </div>

          {/* Third Card */}
          <div className="p-6 bg-[#1E3E62]/50 hover:bg-white hover:text-[#1E3E62]  rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Sales Messaging Refinement</h3>
            <p>Transform your messaging with continuous A/B testing and market analysis. Identify what resonates with your audience to ensure your message aligns with your product and captivates your target market.</p>
          </div>

          {/* Fourth Card */}
          <div className="p-6 bg-[#1E3E62]/50 hover:bg-white hover:text-[#1E3E62]  rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Fractional SDR Service</h3>
            <p>Overcome the challenges of SDR turnover and ramp-up periods. We seamlessly take on the task, providing Fractional SDR services so your sales team can focus on high-priority leads.</p>
          </div>

          {/* Fifth Card */}
          <div className="p-6 bg-[#1E3E62]/50 hover:bg-white hover:text-[#1E3E62]  rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Streamlined Sales Operations</h3>
            <p>Craft a streamlined sales operation built on strategic automations. This empowers your team to concentrate on high-level opportunities, driving impactful results.</p>
          </div>

          {/* Sixth Card */}
          <div className="p-6 bg-[#1E3E62]/50 hover:bg-white hover:text-[#1E3E62]  rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Vertical Expansion Testing</h3>
            <p>Test your offerings and gauge prospect engagement to iterate and scale what works, ensuring a successful vertical expansion.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSection;
