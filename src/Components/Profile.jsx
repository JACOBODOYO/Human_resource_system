import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  return (
    <div>
    <h3 className="flex justify-content-center mb-4 px-">Profile</h3>
     <div className="flex gap-2 p-2 border border-4 m-3" style={{ height: '400px' }}>
     <div className="flex flex- border" style={{ width: '50%' }}>
     <div>name</div>
     <div>position</div>
     <div>salary</div>
     <div>position</div>
     <div></div>
     </div>
     <div className="border " style={{ width: '48%' }}>hsjs</div>
     </div>

      <div className="">
        
        <Link to="/dashboard/Payslip"
        className="nav-link px-0 align-middle text-green">
            <div className="btn btn-primary">payslips</div>
        </Link>
        
        <div className="btn btn-secondary">leave days</div>
        <div>holidays</div>
        
        <Link
        to="/dashboard/category"
        className="nav-link px-0 align-middle text-blue"
      >
        <i className="fs-4 bi-columns ms-2"></i>
        <span className="ms-2 d-done d-sm-inline">Category</span>
      </Link>


      </div>
      
     
    </div>
  );
};

export default Profile;
