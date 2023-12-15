import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";
 
const RestaurantMenu = () =>{
    
    const {resId} = useParams();   // Hook : utility function

     
    const resInfo = useRestaurantMenu(resId);   // custom Hook

    const [showIndex, setShowIndex] = useState(null);
    
     

    if(resInfo===null) return <Shimmer/>;
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

    

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
        c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

   
   
    return (
        <div className="text-center">
           <h1 className="font-bold my-6 text-2xl">{name}</h1>
           <p className="font-bold text-lg text-gray-700">{cuisines.join(", ")} {costForTwoMessage}</p>

           

           {categories.map((category, index)=>(
            <RestaurantCategories 
            key={category?.card?.card.title} 
            data={category?.card?.card}
            showItems={index===showIndex?true:false}
            setShowIndex = {()=>setShowIndex(index)}
            setShowIndexClose = {()=>setShowIndex(null)}
            
            />
           ))}


        </div>
    );


//    
}

export default RestaurantMenu;