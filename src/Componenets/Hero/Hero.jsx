import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';


const Hero = () => {
  return (
    <div className='Hero'>
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid illum quod assumenda quam quaerat laborum! Consectetur dicta obcaecati, deserunt ratione eius impedit rem iste odio commodi a perspiciatis molestiae repellendus fugit repudiandae vero est.a</p>
      <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
