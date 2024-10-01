// components/Hero.js
import LogoMarquee from "../components/LogoMarquee";
import WaveBackground from "./components/WaveBackground";

const Hero = () => {
  return (
    <>
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      
      <div className="relative z-10 text-white">
        <div className="inline-block bg-blue-600 text-sm py-2 px-6 rounded-full text-white mb-4">
          👋 Welcome Brandmode
        </div>
        <h1 className="text-6xl font-extrabold leading-tight mb-6">
          We are a leading{' '}
          <span className="text-blue-300">digital agency</span>
          <br />
          with global reach &{' '}
          <span className="text-blue-300">services</span>
        </h1>
      </div>
    </section>
    <LogoMarquee />
    </>
  );
};

export default Hero;
