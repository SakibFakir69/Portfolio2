import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../Layout/MainLayoutes";
import Home from "../components/Home/Home";
import Skill from "@/components/Skills/Skill";
import Education from "@/components/Education/Education";




export  const route =createBrowserRouter([

    {
        path:'',
        element:<MainLayoutes/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/skill',
                element:<Skill/>
            },
            {
                path:'/education',
                element: <Education />
            }

        ]
    }
])











