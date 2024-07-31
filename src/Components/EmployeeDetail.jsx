import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/employee/detail/" + id)
      .then((result) => {
        setEmployee(result.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleLogout = () => {
    axios
      .get("http://localhost:3001/employee/logout")
      .then((result) => {
        if (result.data.Status) {
          localStorage.removeItem("valid");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/employee/delete/${id}`)
      .then(() => {
        navigate("/employee_list");
      })
      .catch((err) => console.log(err));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <header className="p-2 d-flex justify-content-center shadow border">
        <h4>Employee Management System</h4>
      </header>
      <div className="d-flex justify-content-center flex-column my-6 align-items-start mt-3" style={{width: '100%'}}>
        <div className="flex border w-100">  
          <div className="d-flex flex-column border m-3 p-2">
            <img
              src={`http://localhost:3001/Images/` + employee.image}
              className="emp_det_image h-200 w-300"
              alt="Employee"
            />
            <div className="d-flex align-items-center flex-column mt-5">
              <h3>Name: {employee.name}</h3>
              <h3>Email: {employee.email}</h3>
              <h3>Salary: Ksh{employee.salary}</h3>
            </div>
            <div>
              <button className="btn btn-primary me-2">Edit</button>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
              <button className="btn btn-warning" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
          <div className="m-3">
            <h2>Personal Information</h2>
            <ul className="flex flex-column gap-3">
              <li><p className="fw-bold">Name:</p> <p>{employee.name}</p></li>
              <li><p className="fw-bold">Employee ID:</p> <p>{employee.address

              }</p></li>
              <li><p className="fw-bold">Date of Birth:</p> <p>{employee.dob}</p></li>
              <li><p className="fw-bold">Gender:</p> <p>{employee.Gender}</p></li>
              <li><p className="fw-bold">Nationality:</p> <p>{employee.Nationality}</p></li>
              <li><p className="fw-bold">Address:</p> <p>{employee.address}</p></li>
              <li><p className="fw-bold">Contact Number:</p> <p>{employee.Phone_Number}</p></li>
              <li><p className="fw-bold">Email:</p> <p>{employee.email}</p></li>
            </ul>
          </div>
          <div className="m-3">
            <h2>Employment Details</h2>
            <ul className="flex flex-column gap-3">
              <li><p className="fw-bold">Department:</p> <p>{employee.Category}</p></li>
              <li><p className="fw-bold">Designation:</p> <p>{employee.Designation}</p></li>
              <li><p className="fw-bold">Date of Joining:</p> <p>{employee.Joining_Date}</p></li>
              <li><p className="fw-bold">Employee Type:</p> <p>{employee.Employee_Type}</p></li>
              <li><p className="fw-bold">Reporting Manager:</p> <p>{employee.Reporting_Manager}</p></li>
              <li><p className="fw-bold">Office Location:</p> <p>{employee.officeLocation}</p></li>
              <li><p className="fw-bold">Employee Status:</p> <p>{employee.employeeStatus}</p></li>
            </ul>
          </div>
          <div className="m-3">
            <h2>Compensation & Benefits</h2>
            <ul className="flex flex-column gap-3">
              <li><p className="fw-bold">Salary:</p> <p>{employee.salary}</p></li>
              <li><p className="fw-bold">Benefits:</p> <p>{employee.benefits}</p></li>
            </ul>
          </div>
          <div className="m-3">
            <h2>Qualifications and Skills</h2>
            <ul className="flex gap-3">
              <li><p className="fw-bold">Highest Qualification:</p> <p>{employee.qualification}</p></li>
              <li><p className="fw-bold">Skills:</p> <p>{employee.skills}</p></li>
            </ul>
          </div>
          <div className="m-3">
            <h2>Performance & Feedback</h2>
            <ul className="flex gap-3">
              <li><p className="fw-bold">Performance Rating (2023):</p> <p>{employee.performanceRating}</p></li>
              <li><p className="fw-bold">Manager's Feedback:</p> <p>{employee.managerFeedback}</p></li>
            </ul>
          </div>
        </div>
        <div className="mt-3">
          <h2>My Payslips</h2>
          <form className="flex flex-row">
            <Link
              to={`/employee_detail/${id}/submit/`}
              className="nav-link m-4 px-0 align-middle text-green"
            >
              <div className="btn btn-primary">Payslips</div>
            </Link>
            <Link
              to={`/employee_detail/${id}/leave/`}
              className="nav-link m-4 px-0 align-middle text-green"
            >
              <div className="btn btn-secondary">Leave Days</div>
            </Link>
            <Link
              to={`/employee_detail/${id}/p9form/`}
              className="nav-link m-4 px-0 align-middle text-green"
            >
              <div className="btn btn-danger">P9 Form</div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
