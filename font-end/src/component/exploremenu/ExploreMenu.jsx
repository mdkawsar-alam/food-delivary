import "./exploreMenu.css"
 import {menu_list} from "../../../assets/assets.js"

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className=" explore-menu" id=" explore-menu">
             <h2>Explore Menu</h2>
             <p className="explore-menu-des"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eos suscipit. Voluptatum, impedit? Id, quibusdam!</p>
              <div className="explore-menu-list">
             {menu_list.map((item, index)=>{
                return(
                    <div onClick={()=>setCategory(prev=> prev===item.menu_name?"all":item.menu_name)} key={index} className="explore-menu-list-item">
                       
                       <img className={ category===item.menu_name? "active":""} src={item.menu_image} alt="menu-image" />
                         <p>{item.menu_name}</p>
                    
                    </div>
                
                )
             })}
               
              </div>
              <hr />
        </div>
    );
};

export default ExploreMenu;