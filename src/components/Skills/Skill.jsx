import React from "react";
import { MagicCard } from "../magicui/magic-card";
import { FcAcceptDatabase } from "react-icons/fc";
import { GrCode } from "react-icons/gr";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { VscTools } from "react-icons/vsc";
import { Helmet } from "react-helmet";
function Skill() {
  // langauge ,
  // front-end backend
  // tile , Lanaguge , icon

  const Skills = [
    {
      title: "Langauge",
      skill: ["C++", "JavaScript","TypeScript"],
      icon: <GrCode className="text-green-400" />,
    },

    {
      title: "Frontend Development",
      skill: [ "React", "Tailwind ", "HTML", "CSS"],
      icon: <LiaLaptopCodeSolid className="text-yellow-300" />,
    },
    {
      title: "Backend Development",
      skill: ["Express", "MongoDB", "NodeJs"],
      icon: <FcAcceptDatabase />,
    },
    {
      title: "Tools",
      skill: ["Vs Code", "socket.io", "Firebase", "figma"],
      icon: <VscTools className="text-red-400" />,
    },
  ];

  return (
    <div className="py-20 w-full ">
     
      <div className="h-44 w-24 border bg-violet-600  rounded-full flex justify-between mx-auto transform left-1/2 right-1/2 filter blur-[100px] opacity-70 fixed "></div>
      <section className="lg:py-48 md:py-28 py-20 grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-6 mx-auto z-50">
        {Skills.map((item, key) => (
          <div
            key={key}
            className=" text-white h-44 flex flex-col justify-center 
        p-2 
        rounded
   

        shadow-2xl
    

       

      

  
     

    
     
       hover:border-b-teal-500/20
       hover:border-b-4
   
       hover:backdrop-blur-2xl
       hover:shadow-blue-950
    hover:bg-teal-400/30

bg-teal-400/20




    
    
     




        backdrop-blur-3xl"
          >
            <div className="flex  gap-2 justify-left items-center">
              <p className="text-3xl ">{item.icon}</p>

              <p className="text-xl md:text-2xl font-semibold">{item.title}</p>
            </div>

            <div className="flex gap-2 mt-4 p-2 justify-left items-center">
              {item?.skill.map((item) => (
                // width set kora dita hobba problem porla
                <p
                  key={key}
                  className="border p-2 border-none bg-teal-700/20 rounded
             
             hover:bg-teal-200/10 "
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Skill;
