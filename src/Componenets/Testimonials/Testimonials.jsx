import React, { useRef, useState } from 'react'; 
import next_icon from '../../assets/next-icon.png'; 
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png'; 
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import './Testimonials.css';

const Testimonials = () => {
    
    const [tx, setTx] = useState(0); 
    const sliderRef = useRef(); 

    const slideForward = () => {
        if (tx > -75) { 
            setTx(prevTx => prevTx - 25); 
        }
    };

    const slideBackward = () => {
        if (tx < 0) { 
            setTx(prevTx => prevTx + 25); 
        }
    };

    return (
        <div className='testimonials'>
           
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
            
            <div className="slider">
                <ul ref={sliderRef} style={{ transform: `translateX(${tx}%)` }}>
                   
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="User 1" />
                                <div>
                                    <h3>William Mick</h3>
                                    <span>Edustity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi est aliquam similique alias porro explicabo nulla iusto eum possimus mollitia quo impedit, maxime, labore doloremque?</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="User 2" />
                                <div>
                                    <h3>William Mick</h3>
                                    <span>Edustity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi est aliquam similique alias porro explicabo nulla iusto eum possimus mollitia quo impedit, maxime, labore doloremque?</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="User 3" />
                                <div>
                                    <h3>William Mick</h3>
                                    <span>Edustity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi est aliquam similique alias porro explicabo nulla iusto eum possimus mollitia quo impedit, maxime, labore doloremque?</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="User 4" />
                                <div>
                                    <h3>William Mick</h3>
                                    <span>Edustity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi est aliquam similique alias porro explicabo nulla iusto eum possimus mollitia quo impedit, maxime, labore doloremque?</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;