import {Makerequest,Failerequest,Getuser,getdata,RemoveUser,AddUser,FetchUpdate,UpdateUserRecord} from './Action'
import axios from "axios"
import { toast } from 'react-hot-toast';
export const fetchuser = () => {
    return (dispatch) => {
        dispatch(Makerequest());
        fetch("http://localhost:8000/api/getalldata")
            .then((response) => {
                const userlist = response.json;
                dispatch(Getuser(userlist));
            })
            .catch((error) => {
                dispatch(Failerequest(error));
            });
    }
}

export const fetchTask=()=>{
    return async(dispatch) =>{
        try{
            const res= await fetch("http://localhost:8000/api/getall");
            const task=await res.json();
          ///  console.log(task)
            dispatch(getdata(task))

        }
        catch(error)
        {
           dispatch(Failerequest(error))
        }
    }
}

export const fetchDelete=(id)=>{
        return async(dispatch) =>
        {
           console.log("Delete");
           await axios.delete("http://localhost:8000/api/deletedata/"+id).then((Response)=>{
            
          dispatch(RemoveUser())
         // dispatch(getdata(Response.data))
                
            } ).catch (error=>
                {dispatch(Failerequest(error))});
       // this.setState({    fname:"",  lname:"",  standard: "",  subject: "",  school: ""});
    };
      
    
} 

export const AddUserData=(user)=>{
    
    return async(dispatch) =>{
        {
                await axios.post("http://localhost:8000/api/create",user).then((Response)=>{
                dispatch(AddUser());
                toast.success("Success Added New Record");
            } ).catch (error=>
                {dispatch(Failerequest(error))});
      
    };
      
    }
} 

export const FetchUpdateData=(id)=>{
    return async(dispatch) =>{
        try{
            const res= await fetch('http://localhost:8000/api/getone/'+id);
            const task=await res.json();
            dispatch(FetchUpdate(task))

        }
        catch(error)
        {
           dispatch(Failerequest(error))
        }
    }
}  


export const UpdateUserData=(_id,user)=>{
    
    return async(dispatch) =>{
        {
                await axios.put("http://localhost:8000/api/modifyuser/"+_id,user).then((Response)=>{
                const task= Response.data;
                dispatch(UpdateUserRecord(task));
            } ).catch (error=>
                {dispatch(Failerequest(error))});
      
    };
      
    }
} 