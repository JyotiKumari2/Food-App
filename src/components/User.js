import { useEffect, useState } from "react";

const User = (props) =>{

    //state variable
    const [count, setCount] = useState(0);
    const [count2] = useState(1);

    // API call
    useEffect(()=>{
        // API Calls
          
    }, [count])

    // API call inside functional component
  
    return (

        <div className="user-card">
             <h1>Count: {count}</h1>
             <h1>Count2: {count2}</h1>
             <h1>{props.name}</h1>
             <h3>{props.location}</h3>
             <p> React Developer & Competitive Programmer!</p>
        </div>
    );
}

export default User;