import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import Image from './components/Image';
import About from './components/About';
import Landing from './components/Landing';
import User from './components/User';

function App() {
  return (
    <div>
      <Navbar />

      <section id="home" className="h-screen">
      <Landing />
    
      </section>

      <section id="about" className="">
       
        <About />
        {/* Content */}
      </section>

      <section id="products" className="h-screen">
     
        <Image />
        {/* Content */}
      </section>

      <section id="services" className="">
        <Services />
        {/* Content */}
      </section>
      <User />

      <section id="footer" className="">
        <Footer />
      </section>
    </div>
  );
}

export default App;
