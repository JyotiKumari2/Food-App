import RestaurantCard, {withOpenLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
 
 
const Body = () =>{

    // State Variable - Super Powerful Variable
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredRes,setFilteredRes] = useState([]);
    const [searchText,setSearchText] = useState("");

  

    const RestaurantCardOpen = withOpenLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setListOfRes(json?.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(json?.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants)   
    };
   
    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false) 
    return( <h1>Looks like you're offline! Please check your Internet Connection!</h1>);



    // if(listOfRes.length===0)
    // {
    //    return <Shimmer/>
    // }


    return listOfRes.length===0?<Shimmer/>:(
        <div className="body mx-10 justify-between">
            <div className="flex">
               <div className="search m-4 p-4">
                  <input type="text" className="border border-gray-600 shadow-lg" value={searchText} 
                  onChange={(e)=>{
                    setSearchText(e.target.value)
                  }}/>
                  <button className="px-4 py-2 bg-orange-600 m-4 rounded-lg text-white font-bold" onClick={()=>{
                    const filteredRes = listOfRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRes(filteredRes);
                  }}>Search</button>
               </div>
               <div className="search m-4 p-4 flex items-center font-bold"><button className="border border-solid px-4 py-2 bg-gray-100 rounded-lg shadow-lg"
               onClick={()=>{
                const filteredList = listOfRes.filter(
                    (res) =>res.info.avgRating>4.3
                );
                setFilteredRes(filteredList);

               }}>Top Rated Restaurants</button></div>
              
            </div>
            <div className="flex flex-wrap">
            {
                filteredRes.map((restaurant) => (
                <Link key={restaurant.info.id} 
                to={"restaurants/"+restaurant.info.id}>

                    {restaurant.info.availability.opened?(<RestaurantCardOpen resData={restaurant}/>):(<RestaurantCard resData={restaurant}/>)}</Link>))
            }
            </div>
        </div>
    );
};

export default Body;