import Globe from './images/Globe.png';
import ig from './icons/ig.svg'
import fb from './icons/fb.svg'
import lin from './icons/in.svg'
import tweet from './icons/tweet.svg'

function Contact(){
    return(
        <div className="Contact" id='Contact'>
            <div className="Contact-area">
                <h2>Contact<span> Me</span></h2>
                
                <form>
                <label>Your name</label>
                <input type="text" pattern="[a-zA-Z]"/>
                <label>Your Message</label>
                <textarea></textarea>
                <button type="submit" >Submit</button>
                </form>
            </div>
            <div className="other-area">
                <img src={Globe} className='Globe'/>
                <div className="links">
                    <div>
                        <img src = {ig}/>
                    </div>
                    <div>
                        <img src = {lin}/>
                    </div>
                    <div>
                        <img src = {tweet}/>
                    </div>
                    <div>
                        <img src = {fb}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;