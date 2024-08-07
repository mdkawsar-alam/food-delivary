import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/cart/Cart";

import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import { useState } from "react";
import LoginPopUp from "../component/loginPopUp/LonginPopUP";
import PlaceOrder from "../pages/pleceOder/PleceOder";

import AppDownloads from "../component/appDownlaods/AppDownloads";

import Menu from "../component/menu/Menu";
import ContractUs from "../pages/contract-us/ContractUs";



const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
     <Router>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} />:<></> }
      <div className="app">
       
          <Header setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={ <PlaceOrder/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/contractUs" element={<ContractUs/>}/>
         
            <Route path="/mobileApp" element={<AppDownloads/>}/>
          </Routes>
        
      </div>
      <Footer />
      </Router>
    </> 
  );
};

export default App;
