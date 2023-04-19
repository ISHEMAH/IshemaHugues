import { useState } from "react";


const Projects = () => {
    const [projects, setProjects] = useState([
        
        {
            id:"project1",
            name:"Secroom",
            Description:"This is a password manager mobile app"
            // image:Secroom;


        }
        ,
        {
            id:"project2",
            name:"Art",
            Description:"A simple Art of Graphical Design"

        }
        ,
        {
            id:"project3",
            name:"Hufit",
            Description:"A fitness Mobile App"

        },
        {
            id:"project4",
            name:"  Twigirejo",
            Description:"Logo Design For an E-Learning Platform"

        }
        

    ]);

    return (
        
            <div>
            {/* <svg height="100" width="100">
                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
            </svg> */}
            {projects.map((projects) => (
                <div className="project" key={projects.id}>
                    <h3>{projects.name}</h3>
                    <p>{projects.Description}</p>
                </div>
            ))}
            <a>See more</a>
            </div>
        
    )
}

export default Projects;