import { BoxReveal } from "@/components/magicui/box-reveal";
import { SparklesText } from "@/components/magicui/sparkles-text";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "motion/react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import animationData from '../../public/Animation - 1745166415330.json'
import Lottie from "react-lottie";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


function HeroSection() {



  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
   
  };



  return (
    <div className="text-white   relative overflow-hidden min-h-screen p-6">
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="box w-full"></div>

      <section className=" md:flex w-full">
        {/* box */}

        <div className="flex flex-col space-y-4 flex-1 mt-6">
          {/* intro */}

          <BoxReveal duration={0.5}>
            <div>
        


            <motion.span
             animate={{
              color: ["#00ff00", "#0000ff", "#ffff00"],
            }}
            transition={{
              duration: 5,
              delay: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}

            
            className="text-white">✨  Welcome to my universe</motion.span>
           
            </div>

          </BoxReveal>

          {/* info  */}

          <div>
            <BoxReveal boxColor="red">
              <SparklesText sparklesCount={5}>
                <h2 className="text-4xl font-bold md:text-6xl">Hello</h2>
              </SparklesText>
            </BoxReveal>

            <BoxReveal>
              <h2 className="text-4xl md:text-6xl font-bold">
                <motion.span
                  initial={{ color: ["ff0000"] }}
                  animate={{
                    color: ["#00ff00", "#0000ff", "#ffff00"],
                  }}
                  transition={{
                    duration: 5,
                    delay: 2,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {" "}
                  I'm
                </motion.span>{" "}
                Sakib Fakir
              </h2>
            </BoxReveal>
          </div>

          <div className="md:mt-6 mt-1">
            <BoxReveal>
              <h2 className="md:text-2xl text-xl sm:font-semibold">
                <Typewriter
                  options={{
                    strings: [
                      "Jr Front-End Developer",
                      "Jr Backend Developer",
                      "Jr FullStack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
            </BoxReveal>
          </div>

          {/* button */}
          <div className="flex gap-4 cursor-pointer md:mt-10 ">

            <a target="_blank" href="https://drive.google.com/file/d/1NC_aFep8VKwKUDG9KQXMX_gCZhu8ImOj/view?usp=sharing" className=" md:px-14 px-12 py-3  bg-violet-600 text-xl shadow-2xl shadow-black rounded hover:shadow-2xl hover:bg-stone-950 duration-300 delay-200 hover:shadow-violet-700">
           Resume


           
            </a>


           
      
            
            <Link to={'/contacts'} className=" md:px-14 px-12 py-3 bg-stone-950 rounded text-xl  shadow-2xl hover:bg-violet-600 duration-300 delay-200 hover:shadow-2xl ">Contact</Link>



          </div>


        </div>

        <div className="w-full flex flex-1 justify-center">
          <div className=" ">
            {/* image */}
            <div className="h-96   w-full">
              <Lottie options={defaultOptions}
              />


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
