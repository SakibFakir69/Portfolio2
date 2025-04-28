import React from "react";
import ai from "../../../public/Screenshot 2025-04-25 234215.png";

import { Helmet } from "react-helmet";


import img2 from  "../../../public/Screenshot 2025-04-28 185131.png"
import img3 from '../../../public/Screenshot 2025-04-28 185904.png'

function Project() {

  // github live 

  const projects = [
    {
      name: "NextCall",
      title: "Next Call a video calling website",
      description:
        "Next Call is a real-time chat and video calling web app where people can connect, talk, and see each other—instantly.",
      features: [
        "Real-time Chat",
        "Encryption & Decription",
        "Chat history download",
        "Meeting schedule",
      ],
      front_end: ["React", " Tailwind CSS", "Framer-Motion"],
      backend: ["Express", "Node.Js", "MongoDB"],
      chat: ["Socket.io"],
      video: ["WebSocket", "100ms", "agora"],
      img:img3,
    },

    {
      name: "Customer Support AI",
      title: "Bkash Customer Support AI",
      description:
        "A smart AI support system for bKash that chats naturally in Bangla and English, making customer service faster, easier, and more reliable",
      features: [
        "24/7 Availability",
        "Bilingual Support (Bangla & English)",
        "Real-time, Fast Responses:",
      ],
      front_end: ["JavaScript", "React", "Tailwind CSS", "Lottie-react"],
      backend: ["Firebase", "ExpressJS", "MongoDB"],
      img: ai,
    },

    {
      name: "ConnectToYou",
      title: "A Short News & Social Platform",
      description:
        "ConnectToYou is an innovative short-form social media platform designed for quick news updates and social engagement.",
      front_end: ["React,", " Tailwind CSS", "Framer-Motion"],
      backend: ["Express", "Node.Js", "MongoDB"],
      features: [
        "Short News Updates – Get the latest headlines in a bite-sized format",

        " Category-Based News",
        "Social Interaction",
      ],
    },

    {
      name:"Artifacts Tracker",
      title:"Artifacts Tracker",
      description:"A web application for adding, managing, and viewing artifacts. Users can track their collections with detailed information.",
      front_end: ["React,", " Tailwind CSS", "Framer-Motion"],
      backend: ["Express", "Node.Js", "MongoDB"],
      img:img2,
      features: [
        "Add new artifacts",
        "View and manage your artifacts",
        "Easy-to-use interface for organizing collections",
      ],



    }
  ];

  return (
    <div className="py-24 w-full">

      <Helmet>
        <title>Project</title>
      </Helmet>
      
      <section className="grid md:grid-cols-2 lg:grid-cols-2 gap-3 p-6">
        {projects.map((item, key) => (
          <div
            key={key}
            className="text-white 
                   
                    bg-teal-400/20
               rounded hover:bg-teal-500/30 flex flex-col gap-4 p-4"
          >
            <div className="md:h-60 lg:h-64 w-[99%] flex justify-center mx-auto  border border-teal-400/10 rounded">

              <img src={item.img} alt={item.img}/>
            </div>

            <h2 className="md:text-3xl text-2xl font-bold text-green-400">{item.name}</h2>
            <h3 className="md:text-text-3xl text-xl font-semibold text-emerald-400">
              {item.title}
            </h3>
            <p className="text-stone-200 ">{item.description}</p>

            {/* features */}
            <div>
              <h2 className="text-green-400 font-semibold">Features</h2>
              <div className="">
                {item.features?.map((item, key) => (
                  <div key={key}>
                    <p className="border rounded m-1 px-1 border-white/20 hover:bg-teal-400/20">
                      {key + 1} {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/*  front_end*/}

            <div>
              <h2 className="font-semibold text-violet-400">Front-End</h2>
              <div className="flex gap-4">
                {item.front_end.map((front, key) => (
                  <p
                    key={key}
                    className="border p-1 rounded hover:bg-teal-400/20 border-teal-300/20"
                  >
                    {front}
                  </p>
                ))}
              </div>
            </div>

            {/* backend */}

            <div>
              <h2 className="font-semibold text-red-400">Back-End</h2>
              <div className="flex gap-4">
                {item.backend.map((backend, key) => (
                  <p
                    key={key}
                    className="border p-1 rounded hover:bg-teal-400/20 border-teal-200/10 text-green-300 "
                  >
                    {backend}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Project;
