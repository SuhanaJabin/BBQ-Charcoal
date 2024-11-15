import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi'; // Icon for mobile menu toggle

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-2 relative">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/background3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="container mx-auto flex justify-between text-white items-center relative z-10">
        {/* Logo */}
        <div className="text-xl font-bold w-[70px] h-[70px]">
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
        <div className="md:hidden z-10">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black bg-opacity-80 absolute top-0 left-0 w-full text-white py-4 space-y-4 z-20">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="hover:text-blue-400 transition cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="hover:text-blue-400 transition cursor-pointer"
          >
            About
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="hover:text-blue-400 transition cursor-pointer"
          >
            Products
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="hover:text-blue-400 transition cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="footer"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="hover:text-blue-400 transition cursor-pointer"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
