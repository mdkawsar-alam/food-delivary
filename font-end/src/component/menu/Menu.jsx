import { useState } from "react";
import ExploreMenu from "../exploremenu/ExploreMenu";
import FoodDisplay from "../food-display/FoodDisplay";


const Menu = () => {
    const [category, setCategory]=useState("all")
    return (
        <div>
        <ExploreMenu category={category} setCategory={setCategory}/>
             <FoodDisplay category={category}/>
            
        </div>
    );
};

export default Menu;