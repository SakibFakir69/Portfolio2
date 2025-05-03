import React from "react";
import HeroSection from "../../pages/HeroSection";
import Skill from "../Skills/Skill";
import Education from "../Education/Education";
import Contacts from "../Contacts/Contacts";
import Project from "../project/project";
import { Helmet } from "react-helmet";
function Home() {
  return (
    <div className=" py-20  ">

   
  

      <HeroSection />
      <Skill/>
      <Project/>
      <Education/>
      <Contacts/>
     
    </div>
  );
}

export default Home;
