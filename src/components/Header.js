import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{

    const [btnLoginReact, setBtnLoginReact] = useState("Login");
    return(
        <div className="header">
           
             <div className="logo">
                <img src={LOGO_URL}/>
             </div>

             <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                       <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnLoginReact==="Login"?setBtnLoginReact("Logout"):
                setBtnLoginReact("Login")}}>{btnLoginReact}</button>
                </ul>
             </div>
        </div>
    );
};


export default Header;