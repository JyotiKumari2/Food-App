import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
 
const Body = () =>{

    // State Variable - SUper Powerful Variable
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredRes,setFilteredRes] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(
             
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        setListOfRes(json?.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(json?.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants)
      
         
    };

    // if(listOfRes.length===0)
    // {
    //    return <Shimmer/>
    // }


    return listOfRes.length===0?<Shimmer/>:(
        <div className="body">
            <div className="filter">
               <div className="search">
                  <input type="text" className="search-box" value={searchText} 
                  onChange={(e)=>{
                    setSearchText(e.target.value)
                  }}/>
                  <button className="searchBtn" onClick={()=>{
                    const filteredRes = listOfRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRes(filteredRes);
                  }}>Search</button>
               </div>

               <button className="filter-btn"
               onClick={()=>{
                const filteredList = listOfRes.filter(
                    (res) =>res.info.avgRating>4.4
                );
                setFilteredRes(filteredList);

               }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {
                filteredRes.map((restaurant) => (
                <Link key={restaurant.info.id} 
                to={"restaurants/"+restaurant.info.id}>
                    <RestaurantCard resData={restaurant}/></Link>))
            }



            </div>
        </div>
    );
};

export default Body;