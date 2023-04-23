import Carrier from "./Carrier";

function About(){
    return(
        <div className="About" id="About">
            <div className="photo"></div>
            <div className="aboutme">
                <h2>About <span>Me</span></h2>
                <p>I have always been passionate about design,and it's
                    something that I have been Interested in for as long as I 
                    can remember. I love the way that design can make a
                    huge impact on the world,from the products we use 
                    every day to the way we experience the world around us. 
                </p>
                <Carrier/>
            </div>
            <img className="footerimg" />
        </div>
    );
}

export default About;