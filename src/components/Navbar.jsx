import React from "react";
import { Link, Links } from "react-router-dom";

function Navbar() {


    // const LinkItem = [
      
    //   { id: "/", icon: FaHome, path: "/", text: "Home" },
  
    //   { id: "skill", icon: VscTools, path: "/skill", text: "Skill" },
  
    //   {id: 'education', icon:FaBookReader, path:'/education', text:'Education'},
    //   {id:'experience', icon:FaToolbox, path:'/experience', text:'Experience'},
    //   {id: 'project', icon:LuCode, path:'/project', text:'Project'},
    //   {id:'contact', icon:RiContactsLine, path:'/contact', text:'Contact' }
    // ];

    const links= <>
    <li>
        <Link>Home</Link>
    </li>
    <li>
        <Link>Skill</Link>
    </li>
    <li>
        <Link>Education</Link>
    </li>
    <li>
        <Link>Expreience</Link>
    </li>
    <li>
        <Link>Project</Link>
    </li>
    <li>
        <Link>Contacs</Link>
    </li>







    </>





  return (
    <div>
      <div className="navbar fixed z-50
      bg-transparent backdrop-blur-3xl  border border-stone-900 shadow-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
           
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn px-10 py-3 bg-violet-500 hover:shadow-blue-300 shadow-2xl hover:bg-violet-700">Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
