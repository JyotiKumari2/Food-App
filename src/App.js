import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
// import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Error from "./components/Error.js"
import RestaurantMenu from "./components/RestuarantMenu.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "./utils/appStore.js"
import Cart from "./components/Cart.js"
import Footer from "./components/Footer.js"
// import Grocery from "./components/Grocery.js"


// Chaining 
// Code Splitting
// Lazy loading
// Dynamic Bundling
// On demand loading

const Grocery = lazy(() => import("./components/Grocery.js"));  // this one line of code has lot of power in it
const About = lazy(()=> import("./components/About.js"));


const AppLayout = () =>{

    return (
    <Provider store={appStore}> 
        <div className="app">
            <Header/>
            <Outlet/>  
            <Footer />          
        </div>
    </Provider>
    );

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
                element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
        
            },
            {
                path:"/contact",
                element: <Contact/>
        
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
        
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
        
            },
            {
                path:"/cart",
                element: <Cart/>
        
            },

        ],
        errorElement: <Error/>

    },
    // {
    //     path:"/about",
    //     element: <About/>

    // },
    // {
    //     path:"/contact",
    //     element: <Contact/>

    // },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


