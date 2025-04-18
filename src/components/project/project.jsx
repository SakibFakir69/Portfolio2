import React from "react";

function Project() {
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
    },

    {
      name: "ConnectToYou",
      title: "A Short News & Social Platform",
      description:
        "ConnectToYou is an innovative short-form social media platform designed for quick news updates and social engagement.",
      front_end: ["React,", " Tailwind CSS", "Framer-Motion"],
      backend: ["Express", "Node.Js", "MongoDB"],
    },
  ];

  return (
    <div className="py-24 w-full">
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-6">
        {projects.map((item, key) => (
          <div
            key={key}
            className="text-white 
                   
                    bg-teal-400/20
               rounded hover:bg-teal-500/30 flex flex-col gap-4 p-4"
          >

            <div className="h-60 w-[99%] flex justify-center mx-auto  border">

            </div>
            <h2 className="md:text-3xl text-2xl font-bold">{item.name}</h2>
            <h3 className="md:text-text-3xl text-xl font-semibold">{item.title}</h3>
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
                  <p key={key} className="border p-1 rounded hover:bg-teal-400/20">
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
                  <p key={key} className="border p-1 rounded hover:bg-teal-400/20">
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
