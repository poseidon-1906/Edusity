import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>nurturing tomorrow's leaders today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos maiores aperiam minima dolor, magnam porro placeat animi architecto facere magni?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime libero repudiandae corrupti? Tenetur qui rem quia maxime, temporibus omnis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolore itaque voluptate deserunt quibusdam voluptates nemo placeat eum natus delectus optio assumenda veritatis harum commodi vitae quisquam, exercitationem fugit quod.</p>

        </div>
    </div>
  )
}

export default About
