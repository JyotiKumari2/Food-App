import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategories = ({data, showItems, setShowIndex, setShowIndexClose}) =>{
   
    const handleClick = () =>{

       if(showItems === true)
           setShowIndexClose();
        else
          setShowIndex();
    }
    
    return (
    <div>
    <div className="w-6/12 bg-gray-100 shadow-lg p-4 m-auto my-4 p-4">
    <div className="flex justify-between cursor-pointer" onClick={handleClick}>
    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
    </div>
         {/* Accordion  Body*/}
    {showItems && <ItemList items={data.itemCards}  />}
    </div>
    </div>





);
}

export default RestaurantCategories;