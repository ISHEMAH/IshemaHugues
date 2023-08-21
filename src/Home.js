import ig from './icons/ig.svg'
import git from './icons/git.svg'
import lin from './icons/in.svg'
import tweet from './icons/tweet.svg'


function Home(){
    return(
        <div className="Home" id='Home'>
            
           
            <div className="info">
                <div className="infomain">
                <h3><span>Hi! </span>I'm <span>Hugues</span><br/>UX<span>/</span>UI Designer <br/>& <span>Web</span> Developer</h3>
                <p>
                    I have been working as a UI/UX Designer for 3 years,Product designer for 1 year and graphic designer for 5 years.
                </p>
                </div>
                <div className="quicklinks">
                    <a href='#Contact'>
                        <button>Hire me</button>
                    </a>
                    
                    <a href='http://www.instagram.com/i.s.h.e.m.a/' target='_blank'>
                        <div>
                            <img src = {ig}/>
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/ishema-hugues-848163256/' target='_blank'>
                    <div>   
                    <img src = {lin}/>
                    </div>
                    </a> 
                    <a href='https://twitter.com/HuguesIshema' target='_blank'>
                    <div>
                    <img src = {tweet}/>
                    </div>
                    </a>
                    <a href='https://github.com/ISHEMAH' target='_blank'>
                        <div>
                            <img src = {git}/>
                        </div>
                    </a>
                </div>
            </div>
            <div className="profile">
                <div className="box">
                    
                </div>
                <div className="Image">
                                        
                    </div>
                
            </div>
            
        </div>
        
    );
}

export default Home;