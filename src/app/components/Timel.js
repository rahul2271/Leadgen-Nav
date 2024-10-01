'use client'
import { motion } from "framer-motion";

export default function Timeline() {
  const timelineVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="bg-[#020a13] text-white py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Timeline</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Step 1 */}
        <motion.div
          variants={timelineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold">Step 1</h3>
          <div className="flex items-start">
            <img src="/i1.svg" alt="Icon 1" className="w-8 h-8 mr-4" />
            <div>
              <h4 className="font-bold">Learn and research your ideal customer.</h4>
              <p>You fill out our onboarding questionnaire to help us learn about your ICP. We conduct additional research to gain insights into your targets’ motivations and pain points.</p>
              <p className="text-blue-400">The goal? Putting the right message in front of the right person.</p>
            </div>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          variants={timelineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold">Step 2</h3>
          <div className="flex items-start">
            <img src="/i2.svg" alt="Icon 2" className="w-8 h-8 mr-4" />
            <div>
              <h4 className="font-bold">Set up your email-sending infrastructure and research your target audience.</h4>
              <p>We set up multiple domains and mailboxes, configure technical records, and start warming them up.</p>
              <p className="text-blue-400">The goal? Ensuring your emails land outside of SPAM.</p>
            </div>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          variants={timelineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold">Step 3</h3>
          <div className="flex items-start">
            <img src="/i3.svg" alt="Icon 3" className="w-8 h-8 mr-4" />
            <div>
              <h4 className="font-bold">Craft your email sequences and build your lead lists.</h4>
              <p>We write messaging angles for your different customer profiles. We build contextual lead lists by looking at buying signals like hiring, ad spend, and industry trends.</p>
              <p className="text-blue-400">The goal? Reaching the right company at the right time.</p>
            </div>
          </div>
        </motion.div>

        {/* Step 4 */}
        <motion.div
          variants={timelineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold">Step 4</h3>
          <div className="flex items-start">
            <img src="/i4.svg" alt="Icon 4" className="w-8 h-8 mr-4" />
            <div>
              <h4 className="font-bold">Send personalized messages at scale.</h4>
              <p>We leverage AI to tailor our messaging to each prospect, automating our outreach to potential clients without compromising message quality.</p>
              <p className="text-blue-400">The goal? Flooding your calendar with opportunities.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
