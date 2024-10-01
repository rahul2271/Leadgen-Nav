// components/WaveBackground.js
const WaveBackground = () => {
    return (
      <div className="relative overflow-hidden w-full h-screen bg-black">
        {/* The blue wave */}
        <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-70"
             style={{
               animation: 'wave 8s linear infinite'
             }}>
        </div>
      </div>
    );
  };
  
  export default WaveBackground;
  