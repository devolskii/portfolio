import p1 from "../assets/images/project1.png";
import p2 from "../assets/images/project2.png";
import p3 from "../assets/images/project3.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-blood h-lvh px-4 pt-17 pb-4 flex flex-col justify-around text-3xl"
    >
      <div className="border-2 border-black h-1/4 flex p-4 justify-between">
        <img src={p2} alt="blpi" className="k w-1/3 h-auto" />
        <div className="w-2/3 break-words flex flex-col justify-center">
          <p className="text-right">Central Committee member at BLPI</p>
        </div>
      </div>
      <div className="border-2 border-black h-1/4 flex p-4 justify-between">
        <div className="w-2/3 break-words flex flex-col justify-center">
          <p>Founder and Artiste at Nishat Dana</p>
        </div>
        <img src={p1} alt="nishat dana" className="w-1/3 h-auto" />
      </div>
      <div className="border-2 border-black h-1/4 flex p-4 justify-between">
        <img src={p3} alt="freelancer" className="k w-1/3 h-auto" />
        <div className="w-2/3 break-words flex flex-col justify-center">
          <p className="text-right">A Full Stack Developer freelancer</p>
        </div>
      </div>
    </div>
  );
};
export default Projects;
