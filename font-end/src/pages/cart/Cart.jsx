import { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { food_list, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-items-title">
          <p>items</p>
          <p>Title</p>
          <p>Price</p>
          <p>quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <hr />
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</p>
          </div>
          <hr />
          <button onClick={() => navigate("/order")}>
            Proceed to Checkout
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here:</p>
            <div className="cart-promocode-inputs">
              <input type="text" placeholder="Enter promo code" />
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
