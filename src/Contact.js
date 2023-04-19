function Contact(){
    return(
        <div className="contact">
            <div className="Contact-area">
                <h2>Contact<span>me</span></h2>
                <label>Your name</label>
                <form>
                <input type="text" pattern="[a-zA-Z]"/>
                <label>Your Message</label>
                <textarea></textarea>
                <input type="submit" value="Submit"/>
                </form>
            </div>
            <div className="other-area">
                <img></img>
                <div className="links">
                    <div></div>
                </div>
            </div>
        </div>
    );
}