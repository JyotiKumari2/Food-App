import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () =>{
    return (
        <div className="w-full font-bold items-center p-10 bg-black text-white">
            <div className="w-3/12 flex m-auto">
              <p className="font-bold px-2">Created by : Jyoti Kumari</p>
            
              <Link to="https://www.linkedin.com/in/jyoti-kumari-34a4a01ab/" className="bg-blue-800"><FaLinkedin  size={26}/></Link>
              <Link to="https://github.com/JyotiKumari2" className="bg-gray-800"><FaSquareGithub size={26} /></Link>
              <Link to="https://www.instagram.com/jyotikm1801/" className="bg-pink-800"><FaSquareInstagram size={26}/></Link>
            </div>
               
        </div>
    )
}

export default Footer;