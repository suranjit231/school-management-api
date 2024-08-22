import express from "express";
import SchoolController from "./school.controller.js";

const schoolRouter = express.Router();
const schoolControll = new SchoolController();


//====== router for add a new school ========//
schoolRouter.post("/addSchool", (req, res, next)=>{
    console.log("add scholl req: ", req.body);
    schoolControll.addNewSchool(req, res, next);
});

//====== get all schools list by location router ========//
schoolRouter.get("/listSchools", (req, res, next)=>{
    schoolControll.getSchoolList(req, res, next);
});


export default schoolRouter;