import express from "express";
import cors from 'cors';
import connectDB from './config/db.js'; 

import {config} from "dotenv"
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRouter.js";

config()

// app config
const app = express();
const port =process.env.PORT||4000;

// middleware
app.use(express.json());
app.use(cors());

// Basic route
app.get("/", (req, res) => {
    res.send("API is working");
});

// Connect to database
connectDB();

//api endpoint
 app.use("/api/food",foodRouter)
 app.use("/images",express.static('uploads'));
 app.use("/api/user/",userRouter)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
