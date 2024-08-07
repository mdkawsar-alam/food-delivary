import { useState } from "react";
import ExploreMenu from "../component/exploremenu/ExploreMenu";
import HeroSection from "../component/hero-section/HeroSection";
import FoodDisplay from "../component/food-display/FoodDisplay";
import AppDownloads from "../component/appDownlaods/AppDownloads";



const Home = () => {
    const [category, setCategory]=useState("all")
    return (
        <div className="">
         
            <HeroSection/>
             <ExploreMenu category={category} setCategory={setCategory}/>
             <FoodDisplay category={category}/>
             <AppDownloads/>
            
           
            
        </div>
    );
};

export default Home;