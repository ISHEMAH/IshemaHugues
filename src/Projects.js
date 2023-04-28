import { useState } from "react";
import secroom from './images/secroom.png'
import Ishema from './images/Ishema.jpg'
import Hufit from './images/Hufit.jpg'
import Twigirejo from './images/Twigirejo.png'
import Cyira from './images/Cyira.png' 

const Projects = () => {
    const [projects, setProjects] = useState([
        
        {
            id:"project1",
            name:"Secroom",
            Description:"This is a password manager mobile app",
            image:secroom
                

        }
        ,
        {
            id:"project2",
            name:"Art",
            Description:"A simple Art of Graphical Design",
            image:Ishema
        }
        ,
        {
            id:"project3",
            name:"Hufit",
            Description:"A fitness Mobile App",
            image:Hufit

        },
        {
            id:"project4",
            name:"  Twigirejo",
            Description:"Logo Design For an E-Learning Platform",
            image:Twigirejo
        },
        {
            id:"project5",
            name:"Cyira",
            Description:"Job Finder Platform",
            image:Cyira
        }
        

    ]);

    return (
        
            <div className="Projects" id='Projects'>
            <h2>Awesome <span>Projects</span></h2>
            <p>These are some of Projects I Do.</p>
            <div className="Projects-Container">
            {projects.map((projects) => (
                <div className="project" key={projects.id}>
                    <h3>{projects.name}</h3>
                    <p>{projects.Description}</p>
                    <img src={projects.image}></img>
                    
                </div>
            ))}
            </div>
            <a href="#Contact">See more</a>
            </div>
        
    )
}

export default Projects;