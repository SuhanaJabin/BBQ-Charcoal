import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white ">
       <div className="flex justify-center space-x-8 mt-6 p-7 ">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-200 text-3xl sm:text-4xl md:text-4xl transition-all duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-200 text-3xl sm:text-4xl md:text-4xl transition-all duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-200 text-3xl sm:text-4xl md:text-4xl transition-all duration-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-200 text-3xl sm:text-4xl md:text-4xl transition-all duration-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      <div className="container mx-auto text-center px-4 text-sm">
        {/* Contact Title */}
       
        {/* Contact Information */}
        <div className=" mb-4 flex flex-col md:flex-row space-x-4 items-center justify-center">
  <p>
    Mobile: <a href="tel:+971543255404" className=" text-orange-400 hover:text-orange-200 transition-all duration-300">+971543255404</a>
  </p>
  <p>
    Email: <a href="mailto:daralaseel1995@gmail.com" className="text-orange-400 hover:text-orange-200 transition-all duration-300">daralaseel1995@gmail.com</a>
  </p>
  
 
</div>


      

        {/* Social Media Links */}
       

        {/* Copyright */}
        <p className="text-xs mt-4 mb-5">
          &copy; {new Date().getFullYear()} KING'S BBQ Charcoal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
