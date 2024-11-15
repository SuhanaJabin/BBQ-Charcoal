import React from 'react';

const About = () => {
  return (
    <section className="about-section relative bg-black flex items-center justify-center mt-20 px-4 min-h-screen overflow-hidden">
      {/* About Content */}
      <div className="about-content flex flex-col lg:flex-row items-center justify-center lg:space-x-8 w-full max-w-6xl relative z-10 ">
        
        {/* About Text Section */}
        <div className="about-text w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 p-6 lg:p-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-100">About Us</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 text-justify ">
            At King's BBQ Charcoal, we take pride in providing high-quality charcoal that meets the needs of both residential and commercial customers. With years of expertise in the industry, we specialize in offering sustainably sourced, eco-friendly charcoal products that ensure optimal performance for industrial applications. We value customer satisfaction and are dedicated to being a trusted supplier for all your charcoal needs.
          </p>
        </div>

        {/* About Image Section with Glowing Effect */}
        <div className="about-image w-full lg:w-1/2 flex justify-center mb-32 sm:mb-32 lg:mb-1">
  <img
    src="/c2.jpeg" // Replace with your actual image URL
    alt="About Us"
    className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-lg shadow-lg object-cover glowing-border"
  />
</div>

      </div>
    </section>
  );
};

export default About;
