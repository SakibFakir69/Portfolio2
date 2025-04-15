import React from "react";
import HeroSection from "../../pages/HeroSection";
import Skill from "../Skills/Skill";
import Education from "../Education/Education";

function Home() {
  return (
    <div className="border border-white py-20 px-6  ">

      <HeroSection />
      <Skill/>
      <Education/>
     
    </div>
  );
}

export default Home;
