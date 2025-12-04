
import  { useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchTask,fetchDelete} from '../Redux/ApiFetch';
import {  Link } from 'react-router-dom';
import UserUpdate from './updateuser'
import { ToastContainer, toast } from 'react-toastify';

import AddUser from './Adduser'
import 'bootstrap/dist/css/bootstrap.min.css';


const UserListing=(props)=>{
  useEffect(()=>{ 
    props.loaduser();
  },[])
  
  const handleButtonClick=(id) =>{
    //if (window.confirm('do you want to delete'))
   // {
      props.removeuser(id)
      toast.success("Success Deleted Record");

      props.loaduser();
   // }
  }
    return (
    
    <div>
     <Link to ='/AddUser' class="btn btn-primary" type="button">Add User </Link>
      <div>
        <table class="table table-success table-striped">
          <thead  class="table-light">
            
            <tr> 
              <th>Name</th>
              <th>Last Name</th>
              <th>Standard</th>
              <th>Subject</th>
              <th>School</th>
              <th>Acion</th>

            </tr>
          </thead>
          <tbody>
    
        
        {props.data.recorddata.userlist.map(row => (
          <tr key={row._id}>
            <td>{row.fname}</td>
            <td>{row.lname}</td>
            <td>{row.standard}</td>
            <td>{row.subject}</td>
            <td>{row.school}</td>
            <td>
           <Link to={'/UserUpdate/'+row._id}>Edit</Link>|
            <button className="btn btn-primary" type="button" 
            onClick={()=>handleButtonClick(row._id)}
           >Delete</button></td>
          </tr>
        ))}
        
      </tbody>
        
        </table>
</div>
      </div>
      );

      
}

const mapStateToProps = (state)=> {
  
        return {
          data: state
          
        };
      };
      
      const mapDispatchToProps =  dispatch=> {
        
        return {
          loaduser: () => dispatch(fetchTask()),
          removeuser:(_id)=>dispatch(fetchDelete(_id)),
         // FetchUpdateData:dispatch(FetchUpdateData(_id))
                    
        };
      };
      
      export default connect(mapStateToProps, mapDispatchToProps)(UserListing); 