import ig from './icons/ig.svg'
import fb from './icons/fb.svg'
import lin from './icons/in.svg'
import tweet from './icons/tweet.svg'


function Home(){
    return(
        <div className="Home">
            
           
            <div className="info">
                <h3><span>Hi! </span>I'm <span>Hugues</span><br/>UX<span>/</span>UI Designer</h3>
                <p>
                    I have been working as a UI/UX Designer for 3 years,Product designer for 1 year and graphic designer for 5 years.
                </p>
                <div className="quicklinks">
                    <button>Hire me</button>
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
            <div className="profile">
                <div className="box">
                    
                </div>
                <div className="Image">
                                        
                    </div>
                <img></img>
            </div>
            
        </div>
        
    );
}

export default Home;