import { useContext } from "react";
import { assets } from "../../../assets/assets";
import "./foodItem.css"
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({name,price, description, image,id }) => {
     const { addToCart, removeFromCart, cartItems}=useContext(StoreContext)

    return (
        <div className="food-item" >
             <div className="food-item-image-container">
                <img className="food-item-image" src={image} alt="food image" />
                 {
                     !cartItems[id]? 
                     <img  className="add" onClick={()=>addToCart(id)} src= {assets.add_icon_white}alt="" />
                         :<div className="food-item-counter">
                            
                            <img  onClick={()=>removeFromCart(id)} src= {assets.remove_icon_red}alt="" />
                               <p>   {cartItems[id]}</p>
                               <img  onClick={()=> addToCart(id)} src= {assets.add_icon_green}alt="" />
                              
                               
                         </div>
                 }
             </div>
             <div className="food-item-info">
                <div className="food-item-ratting">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="ratting" />
                </div>
                <p className="food-item-des">{description}</p>
                <p className="food-item-price">${price}</p>
             </div>
            
        </div>
    );
};

export default FoodItem;