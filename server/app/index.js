
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import routedata from "../routes/userroute.js"
const application=express();
application.use(express.json());
application.use(express.urlencoded({extended:true}));
/*
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({extended:true}));
*/
application.use(cors());
dotenv.config();

const PORT=process.env.PORT||7000;
console.log(PORT);

const Url=process.env.MONGOURL;

mongoose.connect(Url).then(()=>
{
    console.log("Db connected");
    application.listen(PORT,()=>{
        console.log("server connected on port:" + PORT);
    })
}).catch(error=>console.log(error));


application.use("/api",routedata);

