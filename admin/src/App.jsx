import { Route, Routes } from "react-router-dom";
import Navber from "./component/navber/Navber";
import Sidebar from "./component/sidebar/Sidebar";

import Order from "./pages/Order/Order";
import List from "./pages/List/List";
import Add from "./pages/add/Add";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const url = "http://localhost:5000";
  return (
    <div>
      <ToastContainer />
      <Navber />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add  url={url}/>} />
          <Route path="/order" element={<Order  url={url}/>} />
          <Route path="/list" element={<List  url={url}/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
