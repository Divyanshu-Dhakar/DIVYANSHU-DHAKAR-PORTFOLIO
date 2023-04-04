import React from 'react';
import './HeroSection.css';
import Fade from 'react-reveal/Fade';

import main_img from '../../Images/main_img.png'
const HeroSection = () => {
  return (
    
    <div id="home">
      <div className='hero-section' >
      <div className='hero-content' >
        <h4>Hello I'm</h4>
        <h1>Divyanshu Dhakar</h1>
        <h3>Creative Front End Web Developer</h3>
        <h4>
        Creating Digital Brands, Experiences, and Products
        </h4>
      </div>
      <div className='hero-photo'>
      <img src={main_img} alt='Hero' />
      </div>
      </div>
      
    </div>

  )
}

export default HeroSection
