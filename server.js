import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectMongodb from "./src/config/connectMongodb.js";
import cors from "cors";
import schoolRouter from "./src/core/schoolManagement/school.router.js";
import { errorHandler } from "./src/middleware/errorHandler.middleware.js";



//===== creating express server ======//
const app = express();


//===== used middleware to parse request body data =======//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//====== setup router for schools =============//
app.use("/api/school", schoolRouter);


//======= handle for default route get request ========//
app.get("/", (req, res)=>{
    res.status(200).json({message:"Welcome to our school managements app"});
});


//====== handle error through error handler middleware =====//
app.use(errorHandler);


//====== define post and listen for port ============//
const port = process.env.PORT || 3200;

app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`);
    connectMongodb();
})