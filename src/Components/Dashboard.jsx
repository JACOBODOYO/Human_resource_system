// import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    localStorage.removeItem("valid")
    axios.get("http://localhost:3001/auth/logout").then((result) => {
      if (result.data.Status) {
        navigate("/");
      }
    });
  };
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-done d-sm-inline">
                Code With Okulo
              </span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-0 align-middle"
                  activeclassname="active"
                >
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-done d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-2 d-done d-sm-inline">
                    Employees
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/company"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-building ms-2"></i>
                  <span className="ms-2 d-done d-sm-inline">
                    Company
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/calendar"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-calendar ms-2"></i>
                  <span className="ms-2 d-done d-sm-inline">
                    Calendar
                  </span>
                </Link>
              </li>
              
              <li className="w-100">
                <Link
                  to="/dashboard/leave"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-calendar3 ms-2"></i>
                  <span className="ms-2 d-done d-sm-inline">
                    Leave
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/review"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-calendar3 ms-2"></i>
                  <span className="ms-2 d-done d-sm-inline">
                    Review
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/report"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-calendar3 ms-2"></i>
                  <span className="ms-2 d-done d-sm-inline">
                    Report
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/Manage"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-calendar3 ms-2"></i>
                  <span className="ms-2 d-done d-sm-inline">
                    Manage
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/Settings"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-calendar3 ms-2"></i>
                  <span className="ms-2 d-done d-sm-inline">
                    Settings
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/category"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-done d-sm-inline">Category</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-done d-sm-inline">Profile</span>
                </Link>
              </li>
              <li className="w-100" onClick={handleLogout}>
                <Link className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-done d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>Simba Lodge Management System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
