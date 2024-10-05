"use client"

export default function PartnerSection() {
    return (
      <section className="bg-[#020a13] text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="md:text-[45px] text-[40px] font-bold mb-4">Partner With Us</h2>
          <p className=" max-w-2xl text-white/50 text-[10px] md:text-[15px] mx-auto mb-12">
            Partner with us for immediate sales enhancements and streamlined outreach. Lay the groundwork for sustained B2B success and transformative growth.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-8">
            <div className="flex flex-col items-center">
              <img src="/money.png" alt="Revenue Growth Icon" className="mb-4 md:h-[50px] h-[50px]" />
              <h3 className="font-bold text-xl">Revenue and Profit Growth</h3>
              <p className="mt-2 text-center">
                Experience revenue spikes in 1-2 quarters with scalable sales assets, minimizing involvement and prioritizing high-impact tasks for business growth.
              </p>
            </div>
  
            <div className="flex flex-col items-center">
              <img src="/growth.png" alt="Growth Strategy Icon" className="mb-4 md:h-[50px] h-[50px]" />
              <h3 className="font-bold text-xl">Customized Growth Strategy</h3>
              <p className="mt-2 text-center">
                Execute a tailored outbound strategy for your business, emphasizing free cash flow without guesswork. Boost pipeline value to prepare for upcoming financial events.
              </p>
            </div>
  
            <div className="flex flex-col items-center">
              <img src="/rocket.png" alt="Client Acquisition Icon" className="mb-4 md:h-[50px] h-[50px]" />
              <h3 className="font-bold text-xl">Systematic Client Acquisition</h3>
              <p className="mt-2 text-center">
                Embrace an innovative system for identifying and converting ideal clients into high-paying customers. Streamline outbound processes by automating repetitive tasks.
              </p>
            </div>
  
            <div className="flex flex-col items-center">
              <img src="/target.png" alt="Business Opportunities Icon" className="mb-4 md:h-[50px] h-[50px]" />
              <h3 className="font-bold text-xl">Business Opportunities</h3>
              <p className="mt-2 text-center">
                Secure qualified new business opportunities monthly through our systematic outreach approach, tailored to highlight your startups distinct value proposition and market position.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  