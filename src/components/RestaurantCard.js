import { CDN_URL } from "../utils/constants";
 

const RestaurantCard = (props) =>{

    const {resData} = props;
    const {cloudinaryImageId, name, cuisines,costForTwo,avgRating,sla} = resData?.info;
    return(
        <div className="m-4 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-300">
            
            <img className="rounded-lg" src={CDN_URL+cloudinaryImageId}/>
            <h4 className="font-bold py-4 text-lg">{name}</h4>
            <div className="flex items-center space-x-4 my-2">
            <div className="border w-12 bg-black text-white font-semibold">⭐{avgRating}</div>
            <h5 className="font-semibold text-gray-700">{sla.slaString}</h5>
            </div>
            <h5 className="font-semibold text-gray-700">{cuisines.join(", ")}</h5>
            <h5 className="font-semibold">{costForTwo}</h5>
          
             
            
        </div>
    );
};


// Higher Order Component

export const withOpenLabel = (RestaurantCard) =>{
    return (props) => {
        return (

             <div>
                <label className="absolute font-bold text-white bg-green-600 text-black m-2 py-1 px-2 rounded-lg">OPEN</label>
                <RestaurantCard {...props}/>
             </div>
        );
    }
}

export default RestaurantCard;