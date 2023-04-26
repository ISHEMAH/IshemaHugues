import Globe from './images/Globe.png';
import ig from './icons/ig.svg'
import git from './icons/git.svg'
import lin from './icons/in.svg'
import tweet from './icons/tweet.svg'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () =>{
        const form = useRef();
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_00fvcxj', 'template_8jm7zes', form.current, 'KpP_2C13BLFmL3hXw')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            }, (error) => {
                console.log(error.text);
            });
        };

    return(
        <div className="Contact" id='Contact'>
            <div className="Contact-area">
                <h2>Contact<span> Me</span></h2>
                
                <form ref={form} onSubmit={sendEmail}>
                <label>Your name</label>
                <input type="text" name='user_name'/>
                <label>Your email</label>
                <input type="email" name='user_email'/>
                <label>Your Message</label>
                <textarea name='message'></textarea>
                <button type="submit" >Submit</button>
                </form>
            </div>
            <div className="other-area">
                <img src={Globe} className='Globe'/>
                <div className="links">
                    <a  href='http://www.instagram.com/i.s.h.e.m.a/' target='_blank'>
                    <div>
                        <img src = {ig}/>
                    </div>
                    </a>
                    <a  href='https://www.linkedin.com/in/ishema-hugues-848163256/' target='_blank'>
                    <div>
                        <img src = {lin}/>
                    </div>
                    </a>
                    <a  href='https://twitter.com/HuguesIshema' target='_blank'>
                    <div>
                        <img src = {tweet}/>
                    </div>
                    </a>
                    <a  href='https://github.com/ISHEMAH' target='_blank'>
                    <div>
                        <img src = {git}/>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;