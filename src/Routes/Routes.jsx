import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../Layout/MainLayoutes";




export  const route =createBrowserRouter([

    {
        path:'/',
        element:<MainLayoutes/>,
        children:[

        ]
    }
])











