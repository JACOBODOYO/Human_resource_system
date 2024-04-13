import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className="flex flex-b">
        <h3 className="text-center">Profile</h3>
        <Link to="/dashboard/Payslip"
        className="nav-link px-0 align-middle text-green">
            <div className="btn btn-primary">payslips</div>
        </Link>
        
        <div className="btn btn-secondary">leave days</div>
        <div>holidays</div>
      </div>
      
      <Link
        to="/dashboard/category"
        className="nav-link px-0 align-middle text-blue"
      >
        <i className="fs-4 bi-columns ms-2"></i>
        <span className="ms-2 d-done d-sm-inline">Category</span>
      </Link>
    </div>
  );
};

export default Profile;
