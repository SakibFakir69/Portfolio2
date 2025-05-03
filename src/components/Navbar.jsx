import React from "react";
import { Link, Links, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";

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
        <NavLink to={'/'}>Home</NavLink>
    </li>
    <li>
        <NavLink to={'/skill'}>Skill</NavLink>
    </li>
    <li>
        <NavLink  to={'/education'}>Education</NavLink>
    </li>
    <li>
        <NavLink to={'/expreience'}>Expreience</NavLink>
    </li>
    <li>
        <NavLink to={'/project'}>Project</NavLink>
    </li>
    <li>
        <NavLink to={'/contacts'}>Contacts</NavLink>
    </li>







    </>





  return (
    <div>
      <div className="navbar fixed z-50
      bg-transparent backdrop-blur-3xl  border border-teal-900/30 shadow-xl -1 ">

        <div className="navbar-start  p-2">
          <div className="dropdown ">


            <MdMenu tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
             

            </MdMenu>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  border border-teal-300/20 rounded-box z-1 mt-3 w-52 p-2 shadow text-white font-semibold bg-teal-600  "
            >
              {links}
            </ul>
          </div>
          {/* <a className="btn  text-xl text-white">Sakib Fakir</a> */}
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            {links}
           
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn border-none px-10 py-3 bg-violet-500 hover:shadow-blue-300 shadow-2xl hover:bg-violet-700">Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
