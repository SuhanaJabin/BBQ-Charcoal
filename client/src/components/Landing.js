import React from 'react';
import Navbar from './Navbar';

function Landing() {
  return (
   <div>
   
     <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video.mp4" // Replace with the path to your video
        autoPlay
        loop
        muted
        style={{ transform: 'scale(1.1)' }} // Optional: to slightly zoom in the video
        ref={(video) => {
          if (video) {
            // video.playbackRate = 0.5;
        
             // Slow down the video to half the speed (0.5)
          }
        }}
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Heading with fire-glowing sparkling effect */}
      <div className="relative z-10 text-center animate-fadeIn">
        <h1 className="text-6xl sm:text-8xl lg:text-[200px] font-bold tracking-wider text-white fire-glow">
          <span style={{ color: "#eA2300" }}>K</span>ING<span style={{ color: "#eA2300" }}>'</span>S
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-6xl text-white tracking-widest mt-2 mb-20">
          BARBEQUE CHARCOAL
        </h2>
      </div>
    </div>
   </div>
  );
}

export default Landing;