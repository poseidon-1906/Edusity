import React from 'react'
import './index.css'
import Navbar from './Componenets/Navbar/Navbar'
import Hero from './Componenets/Hero/Hero'
import Title from './Componenets/Title/Title'
import Programs from './Componenets/Programs/Programs'
import About from './Componenets/About/About'
import Campus from './Componenets/Campus/Campus'
import Testimonials from './Componenets/Testimonials/Testimonials'
import Contact from './Componenets/Contact/Contact'
import Footer from './Componenets/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subTitle = 'Our Programs' title='What We Offer'/>
        <Programs />
        <About />
        <Title subTitle = 'Gallery' title='Campus Photos'/>
        <Campus />
        <Title subTitle = 'Testimonials' title='What Student Say'/>
        <Testimonials />
        <Title subTitle = 'Contact us' title='Get In Touch'/>
        <Contact />
        <hr />
        <Footer />
      </div>
      
    </div>
  )
}

export default App
