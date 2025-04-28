import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

function MainLayoutes() {
  return (
    <div>
     
      <header>
        <Navbar />
      </header>
      <main>
        

        <Outlet />
      </main>
    </div>
  );
}

export default MainLayoutes;
