import { Make_Request, Fail_Request, Get_userlist,Get_Data,Remove_user,Add_user,FetchdataForUpdate
    ,Updateuser } from "./Actiontype";

export const Makerequest = ()=> {
    return {
        type: Make_Request
    };
}

export const Failerequest =(err) => {
    return {
        type: Fail_Request,
        payload: err
    }; 
}

export const Getuser = (data) => {
    return {
        type: Get_userlist,
        payload: data
    };
}

export const getdata=( payload)=>{
    return{
        type:Get_Data,
        payload:payload
    }
}

export const RemoveUser = ()=> {
    return {
        type: Remove_user
    };
}


export const AddUser = ()=> {
    return {
        type: Add_user
    };
}

export const FetchUpdate=(payload)=>{
    return{
        type:FetchdataForUpdate,
        payload:payload
      
      
    }
}

export const UpdateUserRecord=(payload)=>{
    return{
        type:Updateuser,
        payload:payload
      
    }
}


