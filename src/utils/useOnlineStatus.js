import { useEffect, useState } from "react";


const useOnlineStatus = () =>{

    const [onlineStatus, setOnlineStatus] = useState(true);
    // check if online
    useEffect(()=>{
    window.addEventListener("offline", () => {
           setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
        setOnlineStatus(true);
 }); }, []);   // whatever we write inside it , it will be executed only once


    // boolean value
    return onlineStatus;  
}


export default useOnlineStatus;