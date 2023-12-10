import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import {AiOutlineShoppingCart} from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { FaStore } from "react-icons/fa";
import feastFoodLogo from "../assests/feastFoodLogo.png";
 

const Header = () =>{

    const [btnLoginReact, setBtnLoginReact] = useState("Login");
    const onlineStatus = useOnlineStatus();   // custom React Hook
    
    const {loggedInUser} = useContext(UserContext);


    // Subscribing to the store using a selector
    const cartItems = useSelector((store) =>store.cart.items);



   

    return(
        <div className="flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-orange-50 shadow-lg mb-2">
           
             <div className="p-10">
                <img className="w-32" src={feastFoodLogo}/>
             </div>

             <div className="flex items-center font-bold">
                <ul className="flex p-4 m-4">
                    <li className="px-4  font-semibold">Online Status:{onlineStatus?"✅":"🔴"}</li>
                    <li className="px-4 hover:scale-105 hover:font-bold hover:text-orange-600 cursor-pointer  text-gray-700"><Link to="/"><div className="flex items-center  px-4"><IoHome size={20}/>Home</div></Link></li>
                    <li className="px-4 hover:scale-105 hover:font-bold hover:text-orange-600 cursor-pointer  text-gray-700"><Link to="/about"><div className="flex items-center px-4"><FcAbout size={26}/>About</div></Link></li>
                    <li className="px-4 hover:scale-105 hover:font-bold hover:text-orange-600 cursor-pointer  text-gray-700"><Link to="/contact"><div className="flex items-center px-4"><AiFillContacts size={26} />Contact</div></Link></li>
                    <li className="px-4 hover:scale-105 hover:font-bold hover:text-orange-600 cursor-pointer  text-gray-700"><Link to="/grocery"><div className="flex items-center px-4"><FaStore size={22} />Grocery</div></Link></li>
                    <li className="px-4 hover:scale-105 hover:font-bold hover:text-orange-600 cursor-pointer  text-gray-700"><Link to ="/cart" className="listItem hover:scale-105 flex"><AiOutlineShoppingCart size={26}/> 
                                         <p className="relative bottom-2 text-sm font-bold">{cartItems.length}</p></Link></li>
                    <button className="px-4 py-2 border border-solid bg-orange-500 rounded-lg text-white hover:scale-105" onClick={()=>{
                        btnLoginReact==="Login"?setBtnLoginReact("Logout"):
                setBtnLoginReact("Login")}}>{btnLoginReact}</button> 
                    {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
                </ul>
             </div>
        </div>
    );
};


export default Header;