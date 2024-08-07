import express from "express";
import multer from "multer";
import { addFood, foodList, removeFood } from "../Controllers/foodController.js";
import "dotenv/config"

const foodRouter = express.Router();

const storage = multer.diskStorage({
  destination:"uploads",
  
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

foodRouter.post("/add", upload.single("image"),addFood);
foodRouter.get("/list",foodList);
foodRouter.delete("/remove",removeFood)

export default foodRouter;
