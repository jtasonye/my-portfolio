import React, { useRef } from 'react';

import Starfield from './Starfield';
import Header from './Header';
import HeroSection from './HeroSection';

//import { useRef } from 'react;'
import './App.css';

function App() {

  const ref = useRef( null );

  const scrollToAbout = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="main">

      {/* Starfield */}
      <Starfield />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Me */}














      {/* About Me */}
      <div id="about" className="about" ref={ref}>
        <div className="frame">
          <h1 className="about-title"> ( About )</h1>
          <h2 classname="about-text"> 
            Hi! My name is Jason and I'm a software engineer with a passion for developing <br />
            products that matter. I like to approach software development as an art form, <br />
            where coding is just <em>one</em>, of the elements used to bring an abstract idea <br />
            to life. I'm currently a fourth year student <br /> 
            at Gordon College, pursuing a degree in Computer Science. I aspire to build a  <br /> 
            career, built on delivering solutions which are both functional and aesthetically pleasing.
          </h2>
        </div>
      </div>
    </div>
  );
}


export default App;