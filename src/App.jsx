import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Employee from "./Components/Employee";
import Category from "./Components/Category";
import Profile from "./Components/Profile";
import AddCategory from "./Components/AddCategory";
import AddEmployee from "./Components/AddEmployee";
import EditEmployee from "./Components/EditEmployee";
import Start from "./Components/Start";
import EmployeeLogin from "./Components/EmployeeLogin";
import EmployeeDetail from "./Components/EmployeeDetail";
import PrivateRoute from "./Components/PrivateRoute";
import Payslip from "./Components/Payslip";
import AddPayslip from "./Components/AddPayslip";
import Submit from "./Components/Submit";
import Leave from "./Components/Leave";
import P9Form from "./Components/P9Form";
import LeaveCalculator from "./Components/LeaveCalculator";


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/employee_login" element={<EmployeeLogin />}></Route>
        
        <Route path="/employee_detail/:id" element={<EmployeeDetail />}>
          
        </Route>
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          <Route path="" element={<Home />}></Route>
          <Route path="/dashboard/employee" element={<Employee />}></Route>
          <Route path="/dashboard/category" element={<Category />}></Route>
          <Route path="/dashboard/profile" element={<Profile />}></Route>
          <Route path="/dashboard/add_category" element={<AddCategory />}></Route>
          <Route path="/dashboard/add_employee" element={<AddEmployee />}></Route>
          <Route path="/dashboard/edit_employee/:id" element={<EditEmployee />}></Route>
          <Route path="/dashboard/payslip" element={<Payslip />}></Route>
          <Route path="/dashboard/add_payslip" element={<AddPayslip />}></Route>
        </Route>
        <Route path="/employee_detail/:id">
            <Route path="/employee_detail/:id/submit" element={<Submit />}></Route>
            <Route path="/employee_detail/:id/leave" element={<Leave />}></Route>
            <Route path="/employee_detail/:id/p9form" element={<P9Form />}></Route>
            <Route path="/employee_detail/:id/leaveCalculator" element={<LeaveCalculator />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
