import { useState } from "react";

const Carrier = () => {
  const [carrier, setCarrier] = useState([
    {
      name: "Skills",
      end1: "UX/UI Design",
      end2: "Frontend",
      end3: "Backend",
      active: true,
    },
    {
      name: "Experience",
      end1: {
        end: "UX/UI Design",
        description:
          "4 years of experience using tools like Figma,Adobe Photoshop,Illustrator,XD,Sketch,Spline,blender and more.",
      },
      end2: {
        end: "Frontend",
        description: "2 years of experience In Frontend using ReactJS,TailwindCSS and more.",
      },
      end3: {
        end: "Backend",
        description: "1 year of experience In Backend using Django.",
      },
      active: false,
    },
    {
      name: "Education",
      end1: {
        end: "Les Hirondelles De Don Bosco",
        description: "2009-2018",
      },
      end2: {
        end: "Saint Mary",
        description: "2018-2022",
      },
      end3: {
        end: "Rwanda Coding Academy",
        description: "2022-2025",
      },
      active: false,
    },
  ]);

  const handleClick = (clickedIndex) => {
    setCarrier((prevCarrier) =>
      prevCarrier.map((item, index) => {
        if (index === clickedIndex) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
      })
    );
  };

  return (
    <div className="Carriers">
      {carrier.map((carrier, index) => (
        <div key={index}>
          <ul>
            {carrier.active ? (
              <li className="active">{carrier.name}</li>
            ) : (
              <li className="passive" onClick={() => handleClick(index)}>
                {carrier.name}
              </li>
            )}
          </ul>
          <div className="carrier-contents">
            {carrier.name === "Skills" && carrier.active ? (
              <div>
                <h3>{carrier.end1}</h3>
                <div className="progress-container">
                  <div className="progress1">
                    <p>95%</p>
                  </div>
                </div>
                <h3>{carrier.end2}</h3>
                <div className="progress-container">
                  <div className="progress2">
                    <p>86%</p>
                  </div>
                </div>
                <h3>{carrier.end3}</h3>
                <div className="progress-container">
                  <div className="progress3">
                    <p>74%</p>
                  </div>
                </div>
              </div>
            ) : null}
            {carrier.name !== "Skills" && carrier.active ? (
              <div className="skills">
                <h3>{carrier.end1.end}</h3>
                <p>{carrier.end1.description}</p>
                <h3>{carrier.end2.end}</h3>
                <p>{carrier.end2.description}</p>
                <h3>{carrier.end3.end}</h3>
                <p>{carrier.end3.description}</p>
              </div>
            ) : null}
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Carrier;
