import React from "react";
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

     // Create state variable inside class component
     // For craating state variables inside functional component , we use useState() hook inside functional componenet


     // state variable is created whenever a class instance is created : intially there is a no concept of hooks



     // ComponentDidMount()

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

            <div className="w-6/12 m-auto shadow-lg m-4 p-4 bg-yellow-50 shadow-2xl">
             <img className="w-40 m-auto m-10"src={avatar_url}/>
             <h1 className="my-4">Name: {name}</h1>
             <h3>Location: {location}</h3>
             
            </div>
        );
     }
}

export default UserClass;


// This is a class component !