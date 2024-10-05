'use client'

export default function Home() {

      // Add this function in your component (Header.js or relevant file)
const smoothScroll = (id) => {
    const element = document.querySelector(id);
    const headerOffset = 120; // Adjust based on your fixed header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };
    return (
        <>
            <section className="relative bg-transparent min-h-screen text-white flex items-center overflow-hidden">
                {/* Video Background */}
                {/* <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                    autoPlay
                    loop
                    muted
                >
                    <source src="/v.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}

                <div className="container mx-auto px-8 md:px-5 lg:px-24 relative ">
                    {/* Hero Content */}
                    <div className="mt-[-100px] md:mt-[100px] mx-auto md:w-max place-content-center">
                        {/* <div className="text-white bg-[#1E3E62]/90 px-4 py-2 mx-auto w-max place-content-center rounded-full font-medium">
                            Welcome LeadGen Nav
                        </div> */}
                        <h1 className="mt-6 text-4xl md:text-5xl text-center lg:text-7xl font-extrabold leading-tight">
                        We build <span className="text-blue-300">Outbound Systems</span> <br />
                        That <span className="text-blue-300">sells for you.</span>
                        </h1>
                        <p className="text-center font-light mt-[20px]">
                        Helping B2B Businesses adding $350k-$2M in pipeline on Autopilot with “The AI Outbound Accelerator”
                        </p>
                        <button
                            onClick={() => smoothScroll('#start')}
                            className='px-10 py-2 mt-[10px] md:mt-[60px] bg-blue-200 text-black text-[25px] animate-pulse font-bold rounded-[50px] mx-auto block text-center text-lg'
                        >
                            Schedule a call
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
