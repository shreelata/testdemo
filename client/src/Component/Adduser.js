import React, { Component, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import {useDispatch } from 'react-redux';
import {AddUserData} from '../Redux/ApiFetch';
import HomePage from "./Userlist";
import {  Link } from 'react-router-dom';

function Adduser() {
    const dispatch=useDispatch();
    const UserData= {    fname:'', lname: '', standard: '',subject: '',school: ''}
    const userStatedata= { fname: "", lname: "", standard: "", subject: "", school: "" };
    const [user, setRowData] = useState(userStatedata);
    const navigate = useNavigate();
    
    
    const inputHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setRowData({ ...user, [name]: value });
        
        
    };

    const onFormSubmit = (e) =>  { 
        e.preventDefault();       
      dispatch(AddUserData(user))
       navigate("/HomePage");
    };
  

    return (
        
        <div class="row g-3 align-items-center"
         style={{
                margin: "auto",
                marginTop: "20px",
                textAlign: "center",
            }}
        >
           
            <form onSubmit={onFormSubmit} class="row gy-2 gx-3 align-items-center">
                <div class="col-auto">
                <label class="col-form-label"> Enter First name: </label>
                <input class="form-control" 
                    type="text"
                    name="fname"
                    value={user.fname}
                    onChange={inputHandler}
                />
                <br />
                
                <label class="col-form-label">Enter Last name:</label>
                <input class="form-control" 
                    type="text"
                    name="lname"
                    value={user.lname}
                    onChange={inputHandler}
                />
                <br />
                
                <label class="col-form-label">Enter school:</label>
                <input class="form-control" 
                    type="text"
                    name="school"
                    value={user.school}
                    onChange={inputHandler}
                />
                <br />
                
                <label class="col-form-label">Enter standard:</label>
                <input class="form-control" 
                    type="text"
                    name="standard"
                    value={user.standard}
                    onChange={inputHandler}
                />
                <br />
                
                <label class="col-form-label">Enter subject:</label>
                <input class="form-control" 
                    type="text"
                    name="subject"
                    value={user.subject}
                    onChange={inputHandler}
                />
                <br />
                
                <input type="submit"  class="btn btn-primary" value={"Submit"} />
                <Link to ='/HomePage' class="btn btn-primary" type="button">Back </Link>
                </div>
            </form>
            <br />
           
        </div>
    );
}

export default Adduser;
