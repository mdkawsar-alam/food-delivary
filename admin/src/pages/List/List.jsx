import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./List.css";

function List({url}) {

  const [list, setList] = useState([]);
  const getFetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("error");
    }
  };
  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, {data:{id:foodId}});
      if (response.data.success) {
        toast.success("Food item removed successfully");
        getFetchList();
      } else {
        toast.error("Error removing food item");
      }
    } catch (error) {
      toast.error("Error removing food item");
    }
  };
  useEffect(() => {
    getFetchList();
  }, []);

  return (
    <div className=" list add flex-col">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-formate title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>

          <b>Price</b>
          <b>Description</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-formate ">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p>{item.description}</p>
              <p onClick={()=>removeFood(item._id)} className="cors" >X</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
