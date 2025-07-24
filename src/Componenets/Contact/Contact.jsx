import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [result, setResult] = useState('');
    const [success, setSuccess] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const serviceId = 'service_zpz8msh'; 
        const templateId = 'template_qo5iqt5'; 
        const publickey = 'sYwNCWi4rWP8GtL9r'; 

        emailjs.sendForm(serviceId, templateId, e.target, publickey)
            .then((result) => {
                setResult('Email sent successfully.');
                setSuccess(true);
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                  
            })
            .catch((error) => {
                setResult('Error sending email. Not sent!!!');
                 setSuccess(false);
            } );
       e.target.reset();
    }
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
                <form onSubmit={handleSubmit}> 
                    <label> Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required/>
                    <label> Your Mail</label>
                    <input type="mail" name='email' placeholder='Enter your mail'value={email} onChange={(e) => setEmail(e.target.value)}  required/>
                    <label> Your Phone</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile' value={phone} onChange={(e) => setPhone(e.target.value)}  required/>
                    <label> Write your message</label>
                    <textarea name="message" rows="6" placeholder='Enter your message'value={message} onChange={(e) => setMessage(e.target.value)}  required></textarea>
                    <button className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span className={success === true ? 'sent' : 'not-sent'}>{result}</span>
         </div>
    </div>
  )
}

export default Contact
