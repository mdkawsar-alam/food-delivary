import { useContext } from "react";
import "./foodDisplay.css";
import FoodItem from "../foodItem/FoodItem";
import { StoreContext } from "../../context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  //
  if (!food_list) {
    return <div>Loading...</div>;
  }

  return (
    <div className="food-display" id="food-display">
      <h2>To dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "all" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
