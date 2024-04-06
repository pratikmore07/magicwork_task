import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
 
import Navbar from './Navbar.js';
import Hero from './Hero.js';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
import Small from './Small.js';
import Nurce from './Nurce.js';
import Section4 from './Section4.js';
import Counter from './Counter.js';



function App() {
  return (
    <>
      

        <Navbar />
        <Hero />
        <Section1 />
        <Section2 />
        <Section3/>
        <Section4/>
        <Nurce/>
         <Counter/>
        <Small/>
        <Contact/>
        <Footer/>

    </>
  );
}

export default App;
