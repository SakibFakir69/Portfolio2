import React from "react";
import { motion } from "motion/react";
import { FaBookmark } from "react-icons/fa";
import book from "../../../public/book.png";
import books from "../../../public/books.png";

import school from "../../../public/school.png";
import college from "../../../public/college.png";

import { Helmet } from "react-helmet";
function Education() {
  // strinfy
  // ke, object.key ,values

  const educationList = [
    {
      title: "Secondary School Certificate (SSC)",
      instiute: "Dhankora high school",
      subject: ["Science", "4.29"],
      icon: book,
      iconInstiute: school,
    },

    {
      title: "Diploma in Engineering",
      instiute: "shyamoli ideal polythnic Instiute",
      subject: ["Computer science and technology", "Present"],
      icon: books,
      iconInstiute: college,
    },
  ];

  return (
    <div className="py-20 w-full flex justify-center items-center">
    
      <section className=" md:w-4/5 p-4 mt-16 ">
        {educationList.map((education, key) => (

          <motion.div key={key} initial={{scale:0.9}} whileInView={{scale:1.0}} whileHover={{scale:1.03}}>

            <motion.div animate={{}}

            transition={{duration:4,delay:2,ease:'easeIn',times:Infinity}}

            
            className="border mt-5 h-56 flex flex-col  p-1 bg-teal-800/10  rounded
            
            outline-blue-400 outline-1 ">


              <div className="flex gap-2">
                <p className="w-4 h-4 bg-red-400 rounded-full"></p>
                <p className="w-4 h-4 bg-green-400 rounded-full"></p>
                <p className="w-4 h-4 bg-blue-400 rounded-full"></p>
              </div>

              <h2 className="text-green-400 text-xl font-semibold mt-2">
                FEATURED EDUCATION
              </h2>

              <section className="flex flex-col gap-4 mt-4">
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 justify-left items-center ">
                  <img
                    src={education.icon}
                    alt={education.icon}
                    className="h-10 w-10"
                  />
                  <h1 className="text-xl md:text-2xl font-semibold text-white">
                    {education.title}
                  </h1>
                </div>

                <h2 className="text-white font-semibold   flex items-center gap-3 ">
                  <img src={education.iconInstiute} className="w-5 h-5" />
                  <p className="text-slate-300 "> {education.instiute}</p>
                </h2>
              </div>

              {/* subject and gpa */}

              <div className="flex gap-3 mt-1">
                <FaBookmark className="w-6 h-6 text-white opacity-90" />
                {education.subject.map((sub, key) => (
                  <div key={key} className="">
                    <p className=" font-semibold text-teal-400 bg-teal-300/10 hover:bg-teal-300/20 border p-1 border-teal-400/20 rounded">
                      {sub}
                    </p>
                  </div>
                ))}
              </div>
              </section>

             
            </motion.div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default Education;
