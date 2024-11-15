import React, { useState, useEffect } from 'react';

function User() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [secondPartVisible, setSecondPartVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/send-email', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmissionMessage("Your details are submitted. We'll contact you soon!");
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => {
              setSecondPartVisible(true);
            }, 500);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('zoomText');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/background3.mp4"
        autoPlay
        loop
        muted
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>

      {/* Container for text and form */}
      <div className="relative flex flex-col items-center justify-between w-full max-w-6xl lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Left Section: Text */}
        <div
          id="zoomText"
          className={`text-center lg:text-left tracking-wider text-gray-200 font-bold p-5 transform transition-all duration-700 ease-out
          ${isVisible ? 'scale-100 opacity-100' : 'scale-150 opacity-0'}`}
        >
          <div className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl">
            Interested?
          </div>
          {isVisible && (
            <div
              className={`mt-4 text-lg sm:text-2xl lg:text-3xl xl:text-4xl transition-all duration-700 ease-out
              ${secondPartVisible ? 'scale-100 opacity-100' : 'scale-150 opacity-0'}`}
            >
              Let us contact you!
            </div>
          )}
        </div>

        {/* Right Section: Form */}
        <div className="bg-black bg-opacity-75 p-6 sm:p-8 lg:p-10 rounded-lg shadow-2xl w-full sm:w-3/4 md:w-1/2 lg:w-[400px]">
          <h2 className="text-lg sm:text-xl font-semibold text-center mb-6 text-gray-300">
            User Information
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-400 text-sm sm:text-base">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 text-sm sm:text-base">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-400 text-sm sm:text-base">Phone No</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 font-bold bg-gray-700 text-white rounded-lg hover:bg-[#695252] transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>

          {/* Display the confirmation message */}
          {submissionMessage && (
            <div className="mt-4 text-center text-[#695252] font-semibold">
              {submissionMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
