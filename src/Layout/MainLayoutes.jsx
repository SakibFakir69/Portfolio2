



import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function MainLayoutes() {
  return (
    <div>

        <header>
            <Navbar/>
        </header>
        <main>
          
        <Outlet/>
            
        </main>

    </div>
  )
}

export default MainLayoutes