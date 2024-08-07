import { assets } from "../../../assets/assets";
import "./footer.css"
import{Link}from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <img src={assets.logo} alt="logo" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quia officia id assumenda. Dolore, officiis.</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="facebook" />
                        <img src={assets.linkedin_icon} alt="linkedin" />
                        <img src={assets.twitter_icon} alt="twitter" />
                    </div>
                </div>
                <div className="footer-left">
                    <h2>COMPANY</h2>
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Delivery</Link></li>
                        <li><Link>privacy Police</Link></li>
                       
                    </ul>

                </div>
                <div className="footer-right">
                    <h2>GET IN TOUCH</h2>
                   <ul>
                   <li>017452584257</li>
                    <li> Contract@food.com</li>
                   </ul>


                </div>

            </div>
            <hr />
            <p className="footer-copy-right">Copyright © 2024 All rights reserved.</p>

            
        </div>
    );
};

export default Footer;