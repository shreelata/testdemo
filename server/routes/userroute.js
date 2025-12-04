import express from "express";
import{ createuser ,getall ,getone,deletedata,modifyuser}from "../controller/usercontroller.js"

const routedata=express.Router();
routedata.post("/create",createuser);
routedata.get("/getall",getall);
routedata.get("/getone/:id",getone);
routedata.get("/getalldata",getall);

routedata.delete("/deletedata/:id",deletedata);
routedata.put("/modifyuser/:id",modifyuser);
export default routedata;
