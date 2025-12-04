import mongoose from  "mongoose"
const userschema= new mongoose.Schema({
    fname:{
        type:String        
    },
    lname:{
        type:String        
    },
    standard:{
        type:String        
    },
    subject:{
        type:String        
    },
    school:{
        type:String        
    }

});

export default mongoose.model("user",userschema);