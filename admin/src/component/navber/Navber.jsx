import "./navber.css"
import {assets} from "../../../assests/assets"
function Navber() {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <img className="profile" src={assets.profile_image} alt="" />
     

    </div>
  )
}

export default Navber