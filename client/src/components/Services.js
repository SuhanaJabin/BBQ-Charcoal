import React, { useEffect, useRef, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after animation triggers
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-section py-10 mt-20 px-4 sm:px-8 bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: 'url(/charcoal.jpg)' }}
    >
      <div className="bg-black bg-opacity-60 py-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className={"text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-6 sm:mb-8 tracking-wide "}
          >
            Our Services
          </h2>
          <p className="text-sm sm:text-xl md:text-2xl text-gray-100 mt-2 sm:mt-4 mb-8 sm:mb-12 text-justify">
            At King's BBQ Charcoal, we are committed to offering a variety of services to meet your needs. Whether you are an individual or a business, our services are tailored to provide top-quality products and exceptional customer satisfaction.
          </p>
        </div>

        <div className="services-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Service 1 */}
          <div className="service-card bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 hover:bg-black text-gray-800 hover:text-gray-100 transition-all duration-500">
            <h3 className="text-xl sm:text-2xl font-semibold">Bulk Charcoal Supply</h3>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              We provide bulk charcoal supplies for both residential and commercial customers. Get the best prices and fast delivery for large quantities.
            </p>
          </div>

          {/* Service 2 */}
          <div className="service-card bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 hover:bg-black text-gray-800 hover:text-gray-100 transition-all duration-500">
            <h3 className="text-xl sm:text-2xl font-semibold">Eco-Friendly Products</h3>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              We offer sustainable and eco-friendly charcoal that is sourced responsibly to minimize environmental impact while ensuring high-quality performance.
            </p>
          </div>

          {/* Service 3 */}
          <div className="service-card bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 hover:bg-black text-gray-800 hover:text-gray-100 transition-all duration-500">
            <h3 className="text-xl sm:text-2xl font-semibold">Private Labeling</h3>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              We provide private labeling services for businesses who wish to sell our premium charcoal under their own brand name.
            </p>
          </div>

          {/* Service 4 */}
          <div className="service-card bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 hover:bg-black text-gray-800 hover:text-gray-100 transition-all duration-500">
            <h3 className="text-xl sm:text-2xl font-semibold">Fast Delivery</h3>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              Our fast delivery service ensures that your charcoal products arrive on time, every time, to meet your grilling or industrial needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
