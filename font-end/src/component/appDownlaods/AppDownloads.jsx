import { assets } from "../../../assets/assets";
import "./appDownloads.css"

const AppDownloads = () => {
    return (
        <div className="downloadApp" id="downloadApp">
            <p>For better experience  Download <br />
            Food app
            </p>
          <div className="app-download-platform">
          <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" /> 
          </div>
            
        </div>
    );
};

export default AppDownloads;