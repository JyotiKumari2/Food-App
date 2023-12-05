import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Error from "./components/Error.js"
import RestaurantMenu from "./components/RestuarantMenu.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"


const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>            
        </div>
    )
}


const appRouter = createBrowserRouter([

    // Configuration : list of path
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element: <About/>
        
            },
            {
                path:"/contact",
                element: <Contact/>
        
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
        
            },

        ],
        errorElement: <Error/>

    },
    {
        path:"/about",
        element: <About/>

    },
    {
        path:"/contact",
        element: <Contact/>

    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

