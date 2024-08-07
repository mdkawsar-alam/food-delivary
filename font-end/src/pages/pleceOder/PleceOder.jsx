import { useContext } from "react";
import "./pleceOder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <from className="place-oder">
      <div className="place-oder-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
        </div>
        <input type="email" placeholder=" Email address" />
        <input type="text" placeholder=" street" />
        <div className="multi-fields">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="county" />
        </div>
        <input type="text" placeholder="Phone number" />
      </div>
      <div className="place-oder-right">
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
          <button>Proceed to payment</button>
        </div>
      </div>
    </from>
  );
};

export default PlaceOrder;
