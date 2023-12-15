import React from "react";
import { PiForkKnifeFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

class UserClass extends React.Component {

     //constructor
     constructor(props)   // for passing props inside class component
     {
        super(props);   // We will have to use this super keyword

        this.state = {
            
            userInfo:{
                name: "Default name",
                location : "Default Location",
                // avatar_url:"Dummy photo",
            },
        };



     

     }
 

    async  componentDidMount (){
      

        // API calls 
        const data = await fetch("https://api.github.com/users/JyotiKumari2");
        const json = await data.json();

        this.setState({
            userInfo:json,
        });

        



     }

     componentDidUpdate(){
        
     }

     componentWillUnmount()
     {
        // When this component will gone from the page then this function will called!
     }

     render() {

        const {name, location, avatar_url} = this.state.userInfo;
        return(

            <div className="w-6/12 m-auto shadow-lg m-4 p-4 bg-white-50 shadow-4xl">
             
         
              <div className="flex items-center bg-orange-50  text-orange-600 font-bold text-3xl p-10 space-x-4 shadow-xl">
              <PiForkKnifeFill size={26} /> <h1 className="underline">FEAST FOOD</h1> 
              </div> 
              <p className="text-left my-4 py-4 font-medium text-gray-600">Welcome to FeastFood🍔🚀 – your ultimate culinary destination😉, crafted with <span className="text-blue-500 font-semibold">React.js</span> and <span className="text-orange-600 font-semibold">Swiggy's API</span>. Immerse yourself in a world of diverse restaurants and delightful dishes with FeastFood, our unique platform using Swiggy's Live Data.</p>
         
             <div className="flex items-center">
            <div>
            <img className="w-40 text-left shadow-2xl p-1"src={avatar_url}/>
            </div>
              <div className="m-4 text-left">
              <h1 className="font-bold text-pink-600 text-xl">{name}</h1>
              <h3 className="text-pink-400 font-semibold">{location}</h3>
              <p className="text-sm text-gray-400 font-semibold"> Email: jyotikm1801@gmail.com</p>
              <div className="flex items-center space-x-3 py-4">
                
                <Link to={"https://www.linkedin.com/in/jyoti-kumari-34a4a01ab/"} className="hover:scale-105 hover:text-pink-600"><FaLinkedin  size={26}/></Link>
                <Link to={"https://github.com/JyotiKumari2"} className="hover:scale-105 hover:text-pink-600"><FaSquareGithub size={26} /></Link>
              </div>
              </div>
             
             </div>
             
             
            </div>
        );
     }
}

export default UserClass;


// This is a class component !