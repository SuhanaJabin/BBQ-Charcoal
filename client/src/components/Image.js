import React from 'react';

// Array of charcoal names corresponding to each image
const charcoalNames = [
  'Oak Charcoal',
  'Maple Charcoal',
  'Birch Charcoal',
  'Hickory Charcoal',
  'Coconut Charcoal',
  'Pine Charcoal',
  'Beech Charcoal',
  'Alder Charcoal'
];

const images = [
  '/c1.jpeg',
  '/c2.jpeg',
  '/c3.jpeg',
  '/c4.jpeg',
  '/c5.jpeg',
  '/c6.jpeg',
  '/c7.jpeg',
  '/c8.jpeg',
];

const Image = () => {
  return (
    <div className="relative py-10 mb-20 min-h-screen mt-20">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/second.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video for better readability */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-gray-200 ">
        {/* Heading Section */}
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider mt-20 px-4 sm:px-8 md:px-16 lg:px-24">
          Our Products
        </div>

        <div className="text-sm sm:text-lg md:text-xl mt-8 mb-10 text-justify leading-relaxed p-10 sm:px-12 md:px-16 lg:px-24">
          <p>
            At King's BBQ Charcoal, we offer a range of premium charcoal products that enhance your grilling experience.
            Whether you are cooking for family and friends or grilling for a large event, our charcoal provides a
            steady, consistent burn with a rich smoky flavor. Explore our diverse collection of charcoal types, each
            designed to bring out the best flavors in your BBQ.
          </p>
        </div>
        
        {/* Carousel Section */}
        <div className="slider overflow-hidden">
          <div className="slide-track flex gap-4 animate-scroll">
            {images.concat(images).map((src, index) => (
              <div className="slide relative flex-shrink-0" key={index} style={{ width: '200px' }}>
                <img
                  src={src}
                  alt={`carousel-image-${index}`}
                  className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 w-full h-full"
                />

                {/* Custom text that appears on hover */}
                {/* <div className="text-overlay text-center absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 h-full transition-opacity duration-300 ease-in-out text-white text-sm sm:text-base md:text-lg tracking-wider">
                  {charcoalNames[index % charcoalNames.length]}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
