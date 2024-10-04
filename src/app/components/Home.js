'use client'

export default function Home() {
    return (
        <>
            <section className="relative bg-[#020a13] min-h-screen text-white flex items-center overflow-hidden">
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

                <div className="container mx-auto px-8 md:px-5 lg:px-24 relative z-10">
                    {/* Hero Content */}
                    <div className="mt-[-250px] md:mt-2 mx-auto md:w-max place-content-center">
                        <div className="text-white bg-[#1E3E62]/90 px-4 py-2 mx-auto w-max place-content-center rounded-full font-medium">
                            WELCOME BRANDMODE
                        </div>
                        <h1 className="mt-6 text-4xl md:text-5xl text-center lg:text-7xl font-extrabold leading-tight">
                            We build Outbound Systems <br />
                            That sells for you.
                        </h1>
                        <p className="text-center font-light mt-[20px]">
                            Helping B2B Businesses adding $150k-$1M in pipeline every month with “The AI Outbound Accelerator”
                        </p>
                        <button
                            onClick={() => { /* handle click event here */ }}
                            className='px-4 py-1 mt-[10px] bg-gradient-to-r from-[#1E3E62] to-[#1E3E62]/90 text-white animate-pulse font-medium rounded-md mx-auto block text-center text-lg'
                        >
                            Schedule a call
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
