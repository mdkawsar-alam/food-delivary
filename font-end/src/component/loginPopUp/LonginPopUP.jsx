import "./loginPopUP.css";
import { assets } from "../../../assets/assets";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios"

const LonginPopUP = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const {url,setToken} = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };
   const onLogin=async(event)=>{
    event.preventDefault();
     let newUrl=url;
     if (currentState==="login") {
      newUrl+="/api/user/login"

     } else {
      newUrl+="api/user/register"
      
     }
      const response= await axios.post(newUrl,data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false)
        
      }else{
        response.data.message
      }
   }

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              onChange={onchangeHandler}
              value={data.name}
              placeholder="Enter your name"
              required
            />
          )}

          <input
            type="Email"
            name="email"
            onChange={onchangeHandler}
            value={data.email}
            placeholder="Enter your Email"
            required
          />
          <input
            type="password"
            name="password"
            onChange={onchangeHandler}
            value={data.password}
            placeholder="Enter Password"
            required
          />
        </div>

        <button>
          {currentState === "Sign Up" ? "create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>by continuing , i agree to the terms of use privacy police</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create New account ?{" "}
            <span onClick={() => setCurrentState("Sign UP")}> Click here </span>
          </p>
        ) : (
          <p>
            already have an account ?
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LonginPopUP;
