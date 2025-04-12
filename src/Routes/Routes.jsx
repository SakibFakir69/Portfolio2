import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../Layout/MainLayoutes";
import Home from "../components/Home/Home";




export  const route =createBrowserRouter([

    {
        path:'',
        element:<MainLayoutes/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }

        ]
    }
])











