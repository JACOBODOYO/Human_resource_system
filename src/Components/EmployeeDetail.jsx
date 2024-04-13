import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState([]);
  

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/employee/detail/" + id)
      .then((result) => {
        setEmployee(result.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleLogout = () => {
    axios
      .get("http://localhost:3000/employee/logout")
      .then((result) => {
        if (result.data.Status) {
          localStorage.removeItem("valid");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  

 

  return (
    <div>
      <div className="p-2 d-flex justify-content-center shadow">
        <h4>Employee Management System</h4>
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center mt-3">
        <img
          src={`http://localhost:3000/Images/` + employee.image}
          className="emp_det_image"
          alt="Employee"
        />
        <div className="d-flex align-items-center flex-column mt-5">
          <h3>Name: {employee.name}</h3>
          <h3>Email: {employee.email}</h3>
          <h3>Salary: Ksh{employee.salary}</h3>
        </div>
        <div>
          <button className="btn btn-primary me-2">Edit</button>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      

      <div className="mt-3">
      <h2>my payslips</h2>
      <form className="flex flex-row">
      <Link to="/employee_detail/:id/submit/" className="nav-link m-4 px-0 align-middle text-green">
        <div className="btn btn-primary">Payslips</div>
      </Link>
      <Link to="/employee_detail/:id/leave/" className="nav-link m-4 px-0 align-middle text-green">
        <div className="btn btn-secondary">Leave Days</div>
      </Link>
      <Link to="/employee_detail/:id/p9form/" className="nav-link m-4 px-0 align-middle text-green">
        <div className="btn btn-danger">P9 Form</div>
      </Link>
    </form>
      </div>
      
    </div>
  );
};

export default EmployeeDetail;

