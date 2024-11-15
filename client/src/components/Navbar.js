import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-3 fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70">
      {/* Video Background */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/background3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="container mx-auto flex justify-between text-white items-center relative z-10">
        <div className="ml-5 text-xl font-bold w-[50px] h-[50px]">
          <img src='/mylogo.png' alt="Logo" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 font-bold text-2xl">
          <Link to="home" smooth={true} duration={500} className="hover:text-blue-400 transition cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-blue-400 transition cursor-pointer">
            About
          </Link>
          <Link to="products" smooth={true} duration={500} className="hover:text-blue-400 transition cursor-pointer">
            Products
          </Link>
          <Link to="services" smooth={true} duration={500} className="hover:text-blue-400 transition cursor-pointer">
            Services
          </Link>
          <Link to="footer" smooth={true} duration={500} className="hover:text-blue-400 transition cursor-pointer">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className=" mr-5 md:hidden z-30 relative">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          onClick={toggleMenu} 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
        ></div>
      )}

      {/* Mobile Links aligned to the right */}
      <div 
        className={`md:hidden fixed top-0  rounded-lg tracking-wder mt-20 right-0 h-1/2 w-1/2 bg-black bg-opacity-80 text-white  space-y-2 z-30 text-xl transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          boxShadow: '0 0 10px 3px rgba(255, 170, 0, 0.8)', // glowing yellow border effect
          border: '2px solid rgba(255, 150, 0, 0.8)' // optional solid border for extra definition
        }}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={toggleMenu}
          className="hover:text-orange-300 font-bold tracking-wider text-center transition cursor-pointer block px-4 py-5 mt-5"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={toggleMenu}
          className="hover:text-orange-300 text-center transition cursor-pointer block px-4 py-2"
        >
          About
        </Link>
        <Link
          to="products"
          smooth={true}
          duration={500}
          onClick={toggleMenu}
          className="hover:text-orange-300 text-center transition cursor-pointer block px-4 py-2"
        >
          Products
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          onClick={toggleMenu}
          className="hover:text-orange-300 text-center transition cursor-pointer block px-4 py-2"
        >
          Services
        </Link>
        <Link
          to="footer"
          smooth={true}
          duration={500}
          onClick={toggleMenu}
          className="hover:text-orange-300 text-center transition cursor-pointer block px-4 py-2"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
