import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Component/Userlist";
import { useDispatch } from "react-redux";
import UserUpdate from './Component/updateuser'
import AddUser from './Component/Adduser'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function App() {
  const dispatch =useDispatch();
  return (
    <div className="App">
      
       <Router>
        <div>
          <ul className="App-header">
            <li>
              
              <Link to="/HomePage">Home</Link>
            </li>
                      
            <ToastContainer />
            
          </ul> 
          <Routes>
            <Route path="/HomePage" Component={HomePage} />     
            <Route path="/UserUpdate/:_id" Component={UserUpdate} />   
             <Route path="/AddUser" Component={AddUser} />        
           

          </Routes>
               

        </div>
      </Router>
      

    </div>
  )
}

export default App;

