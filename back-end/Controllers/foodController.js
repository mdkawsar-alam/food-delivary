import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  try {
    const { file, body } = req;
    const { name, description, price, category } = body;

    if (!file || !name || !description || !price || !category) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const food = new foodModel({
      name,
      description,
      price,
      category,
      image: file.filename,
    });

    await food.save();

    res
      .status(201)
      .json({ success: true, message: "Food added successfully", food });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
//food list
const foodList = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
// remove food
const removeFood= async (req,res)=>{
  try {
    const food= await foodModel.findById(req.body.id)
    fs.unlink(`uploads/${food.image }`, ()=>{})
    await  foodModel.findByIdAndDelete(req.body.id)
res.status(200).json({success:true, message:" food removed"})
  } catch(error) {
    console.error(error);
res.status(500).json({success:false, message:error})
    
  }
}
export { addFood ,foodList ,removeFood};
