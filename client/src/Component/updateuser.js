import React, { Component, useState,useEffect } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useParams,useNavigate } from "react-router-dom";
import {useDispatch,useSelector } from 'react-redux';
import {FetchUpdateData,UpdateUserData} from '../Redux/ApiFetch';
import HomePage from "./Userlist";
import {  Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';





function Updateuser() {
      let {_id}=useParams() 
    const dispatch=useDispatch();
    const UserData= { _id:0,   fname:'', lname: '', standard: '',subject: '',school: ''}
    const userStatedata= {_id:0, fname: "", lname: "", standard: "", subject: "", school: "" };
    const [user, setRowData] = useState(userStatedata);
    const navigate = useNavigate();
    const userobj=useSelector((state)=>state.recorddata.userobj);

      useEffect(()=>{ 
        dispatch(FetchUpdateData(_id))
            
  },[])
  
    useEffect(()=>{ 
       if(userobj)
        {
            setRowData(userobj)
          
        }
  },[userobj])

    const inputHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setRowData({ ...user, [name]: value });
        
        
    };

    const onFormSubmit = (e) =>  { 
        e.preventDefault();            
        dispatch(UpdateUserData(_id,user))
        toast.success("SuccessFull Updated!");

        navigate("/HomePage");
    };
  

    return (
        
        <div cclass="mb-3 row">

         
            <form onSubmit={onFormSubmit} class="row gy-2 gx-3 align-items-center">
                  <div class="col-auto">
                <label class="form-label">Enter First name: </label>
                <input class="form-control"  
                    type="text"
                    name="fname"
                    value={user.fname}
                    onChange={inputHandler}
                />
               <br/>
                <label class="form-label">Enter Last name:</label>
                <input class="form-control" 
                    type="text"
                    name="lname"
                    value={user.lname}
                    onChange={inputHandler}
                />
               <br/>
                <label class="form-label">Enter school:</label>
                <input class="form-control" 
                    type="text"
                    name="school"
                    value={user.school}
                    onChange={inputHandler}
                />
               <br/>
                <label class="form-label">Enter standard:</label>
                <input class="form-control" 
                    type="text"
                    name="standard"
                    value={user.standard}
                    onChange={inputHandler}
                />
               <br/>
                <label class="form-label">Enter subject:</label>
                <input class="form-control" 
                    type="text"
                    name="subject"
                    value={user.subject}
                    onChange={inputHandler}
                />
               <br/>
                <input type="submit"  class="btn btn-primary" value={"Submit"} />
                <Link to ='/HomePage' class="btn btn-primary" type="button">Back </Link>
                </div>
            </form>
            <br />
           
        </div>
    );
}

export default Updateuser;
