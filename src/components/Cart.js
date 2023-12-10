import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () =>{

    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    };

    return (
    // <div className="font-bold text-center m-10 p-10 ">
    //    cartItems.length!==0

    //     <h1 className="text-bold">CART</h1>
    //      <div className="w-6/12 m-auto shadow-lg m-4 p-4">
    //         <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
    //         <div className="w-96"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" /></div>
    //         {cartItems.length===0 && <h1 className="m-4 p-4">It looks like, your cart is empty!</h1> }


    //         <p className="m-4 p-4 text-gray-400 font-mono">You can go to the Home page to view more restaurants 🍟!</p>
    //         {/* <ItemList items={cartItems}/> */}
    //      </div>
    // </div>


<div> 
{cartItems.length !== 0 ? (
  <div className="font-bold text-center m-4 p-4">
    <div className="w-6/12 m-auto shadow-lg m-4 p-4">
    <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
  <ItemList items={cartItems} />
  </div>

  </div>
) : (
  <div className='w-100% md:h-[calc(100vh-80px)] flex items-center flex-col justify-center my-0 mx-auto text-center'>
    <div className="w-36"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" /></div>
    {/* <div className='mt-6 text-base font-semibold'>Your Cart is Empty</div> */}
    <h1 className="m-2 p-2 font-bold">It looks like, your cart is empty!</h1>
    {/* <div className='mt-2'>You can go to home page to view more restaurants</div> */}
    <p className="m-2 p-2 text-gray-400 font-mono">You can go to the Home page to view more restaurants 🍟!</p>
    <div className='mt-7 py-3 px-5 capitalize bg-[#fc8019] text-white font-semibold cursor-pointer text-base text-center border-0 outline-0 rounded-lg shadow-lg'><Link to='/'>See Restaurants Near You</Link></div>
  </div>
)}

</div>
    );
    
};

export default Cart;