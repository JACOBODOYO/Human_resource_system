// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0);
  const [employeeTotal, setEmployeeTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
    adminRecords();
  }, []);

  const adminRecords = () => {
    axios.get("http://localhost:3001/auth/admin_records").then((result) => {
      if (result.data.Status) {
        setAdmins(result.data.Result);
      } else {
        alert(result.data.Error);
      }
    });
  };
  const adminCount = () => {
    axios.get("http://localhost:3001/auth/admin_count").then((result) => {
      if (result.data.Status) {
        setAdminTotal(result.data.Result[0].admin);
      }
    });
  };
  const employeeCount = () => {
    axios.get("http://localhost:3001/auth/employee_count").then((result) => {
      if (result.data.Status) {
        setEmployeeTotal(result.data.Result[0].employee);
      }
    });
  };
  const salaryCount = () => {
    axios.get("http://localhost:3001/auth/salary_count").then((result) => {
      if (result.data.Status) {
        setSalaryTotal(result.data.Result[0].salary);
      }
    });
  };
  return (
    <div className="homed">
      <div className="flex border rounded-2 m-4  welcome">
      <p className="image m-2" >image</p>
        <p className="m-2 text-red-400" >Welcome Admin</p>

      </div>
      <div className="flex  rounded-3 jul m-4">
        <p className="m-2 shadow-sm btn  home">Home/DashBoard</p>
        <p className="m-2 shadow-sm btn admin ">Admin DashBoard</p>
        <p className="m-2 shadow-sm btn admin ">Employee DashBoard</p>
      </div>
      <div className="flex border rounded-3 jul ">
        <p className="flex flex-column mt-2 mb-2 text-start shadow-sm em w-25 btn btn-danger">
          <div>Employee</div>
          <div>{employeeTotal}</div>
        </p>
        <p className="m-2 shadow-sm em w-25 btn btn-primary text-start">
        <div>Company/ admin</div>
        <div>{adminTotal}</div></p>
        <p className="m-2 shadow-sm em w-25 btn btn-info ">leave</p>
        <p className="m-2 shadow-sm em w-25 btn btn-warning text-start">
        <div className="text-white">Salary</div>
        <div className="text-white">{salaryTotal}</div></p>
      </div>

      {/*<div className="p-1 d-flex justify-content-around mt-3">
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Admin</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{adminTotal}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Employee</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{employeeTotal}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Salary</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>Ksh {salaryTotal}</h5>
          </div>
        </div>
      </div> */}
      <div className="mt-4 px-5 pt-3">
        <h3>List of Admin</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr key={a.id}>
                <td>{a.email}</td>
                <td>
                  <button className="btn btn-info bt-sm me-2">Edit</button>
                  <button className="btn btn-warning bt-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex border">
      <div className="w-25">
      <div>Your upcomin leave</div>
      <li>
            <ol>JEFF</ol>
            <ol>HARRY</ol>
            <ol>mATHEWs</ol>
            <ol></ol>
      </li>
      </div>
      <div>
      <div>Your activities</div>
      <li>view alfred</li>
      <li></li>
      <li></li>
      <li></li>
      </div>
      </div>
    </div>
  );
};

export default Home;
