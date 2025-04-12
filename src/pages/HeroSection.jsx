import React from "react";

function HeroSection() {
  return (
    <div className="text-white  border border-white mt-6">
      <div className="box "></div>

      <section className=" md:flex">
        {/* box */}

        <div className="flex flex-col space-y-4 flex-1 mt-6">
          {/* intro */}
          <div>
            <span>Welcom to my universe</span>
          </div>

          {/* info  */}

          <div>
            <h2 className="text-2xl font-bold md:text-4xl">Hello</h2>
            <h2 className="text-2xl md:text-4xl font-bold">I'm Sakib Fakir</h2>
          </div>

          <div></div>
          {/* button */}
          <div>
            <button className="btn px-10 py-3">Resume</button>
            <button className="btn px-10 py-3 ">Contact</button>
          </div>
        </div>

        <div className="w-full flex flex-1">
         

          <div className=" ">
            {/* image */}
            <div className="h-96   w-full">jk</div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default HeroSection;
