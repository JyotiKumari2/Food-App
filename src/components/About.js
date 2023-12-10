import { render } from "react-dom";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";


// Class Component
class About extends React.Component{
    constructor(props)
    {
        super(props);    
    }
    componentDidMount ()
    {   
    }
    render(){
        return(
            <div className='font-bold text-center m-10 p-10'>
             
            {/* <User name={"Jyoti Kumari"} location = {"Lucknow"}/> */}
            <UserClass name={"Jyoti Kumari (class)"} location= {"Uttar Pradesh"}/>
        </div>
        )
    }
}
export default About;