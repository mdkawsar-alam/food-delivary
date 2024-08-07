import { createContext, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  // State for storing items in the cart
  const [cartItems, setCartItems] = useState({});
  //token
  const [token, setToken] = useState("");
  const url = "http://localhost:5000";

  // add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [itemId]: (prevCartItems[itemId] || 0) + 1,
    }));
  };

  //  remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[itemId] > 0) {
        updatedCartItems[itemId] -= 1;
      }
      return updatedCartItems;
    });
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list: food_list,
    cartItems: cartItems,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    getTotalCartAmount: getTotalCartAmount,
    url: url,
    setToken:setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
