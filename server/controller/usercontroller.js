import { error } from "console";
import usermodel from "../module/usermodel.js";
import mongoose from "mongoose";

export async function createuser (req,res)
{
    try{
    const userdata=new usermodel(req.body)
    console.log(userdata);
    const savedata=await userdata.save();
    if(!savedata){
       res.status(500).json(error) 
    }
   
    res.status(200).json(savedata);
}
catch(error)
{
res.status(500).json(error)
}
}
   


export  async function  getall(req,res){
    try{
        
        
        const userdata= await usermodel.find();
        if(!userdata)
            
    {
       res.status(500).json(error) 
    }
    res.status(200).json(userdata);
    }
    catch(error)
    {
        res.status(500).json(error)
}
}

export  function  getalldata(req,res){
    try{
        
        
        const userdata=  usermodel.find();
        if(!userdata)
            
    {
       res.status(500).json(error) 
    }
    res.status(200).json(userdata);
    }
    catch(error)
    {
        res.status(500).json(error)
}
}

export  async function  getone(req,res){
    try{
        const id=req.params.id;
        const userdata= await usermodel.findById(id);
        if(!userdata)
    {
       res.status(500).json(error) 
    }
    res.status(200).json(userdata);
    }
    catch(error)
    {
        res.status(500).json(error)
}
}

export async function  deletedata(req,res){
    var ObjectId = usermodel.schema.id;

    const id=req.params.id;
   usermodel.findByIdAndDelete(id)
     .then(result => {
        res.status(200).json({
        message: ' Deleted',
        result
     });
   })
   .catch(err => {
      console.log(err);
      res.status(500).json({
      message: 'Error Occured',
      error: err
    });
  });
    /*
    try{
        const id=req.params.id;
        console.log(id);
            
       const userdata= await usermodel.findByIdAndDelete(id)
       .then(result => {
        res.status(200).json({
        message: 'Address Deleted',
        result
     });
       
    //res.status(200).json({ success: true, msg: 'Product Deleted' });
    }

    catch(error)
    {
        res.status(500).json(error)
}
*/
}

export async function  modifyuser(req,res){
    try{
        const id=req.params.id;
        console.log(req.body);
        const userdata= await usermodel.findById(id);
        if(!userdata)
    {
       res.status(500).json(error) 
    }
    const updateduser=await  usermodel.findByIdAndUpdate(id,req.body,{new :true});

    res.status(200).json(updateduser);
    }

    catch(error)
    {
        res.status(500).json(error)
}
}
