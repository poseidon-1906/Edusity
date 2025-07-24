import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-us">
            <div className="contact-col">
                <h3>Send us a message <img src= {msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet accusantium quas, qui exercitationem officia blanditiis dolores voluptas. Ipsum ab adipisci, ea saepe consequatur numquam necessitatibus.</p>
                <ul>
                    <li>youmbibryan@gmail.com</li>
                    <li><img src={mail_icon} alt="" /></li>
                    <li><img src={phone_icon} alt="" /></li>
                    <li><img src={location_icon} alt="" /></li>
                </ul>
            </div>
        </div>
        <div className="contact-col">
                <form> 
                    <label> Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required/>
                    <label> Your Phone</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile' required/>
                    <label> Write your message</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    
                </form>
         </div>
    </div>
  )
}

export default Contact
