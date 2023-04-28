import Carrier from "./Carrier";

function About(){
    return(
        <div className="About" id="About">
            <div className="photo"></div>
            <div className="aboutme">
                <h2>About <span>Me</span></h2>
                <p>I have always been passionate about design,and it's
                    something that I have been Interested in for as long as I 
                    can remember.After being a professional Designer I had to emplement what I design where I first became a Frontend Dev and then a backend Dev.
                </p>
                <Carrier/>
            </div>
            <div className="scroll">
                
                <p>Scroll</p>
            </div>
        </div>
    );
}

export default About;