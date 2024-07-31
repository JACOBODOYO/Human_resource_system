import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Payslip = () => {
  const [payslip, setPayslip] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/payslip")
      .then((result) => {
        if (result.data.Result) {
          setPayslip(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((error) => {
        console.error("Error fetching payslips:", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/api/payslip/${id}`)
      .then((response) => {
        if (response.data.Status) {
          setPayslip(payslip.filter((p) => p.id !== id));
        } else {
          alert(response.data.Error);
        }
      })
      .catch((error) => {
        console.error("Error deleting payslip:", error);
      });
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Payslip List</h3>
      </div>
      <Link to="/dashboard/add_payslip" className="btn btn-success">
        Add Payslip
      </Link>
      <table className="payslipsTable mt-5 g-4">
        <thead>
          <tr className="table m-4 g-20">
            <th>Name</th>
            <th>Basic Salary</th>
            <th>Service Charge</th>
            <th>Gross Pay</th>
            <th>Provident/ Pension</th>
            <th>Cash Pay Loan Provident</th>
            <th>Round Down To</th>
            <th>Benefits</th>
            <th>Total (B+E)</th>
            <th>If Free Housing Add 15%</th>
            <th>Chargeable Pay</th>
            <th>Taxed Charged</th>
            <th>Monthly Personal Relief</th>
            <th>NHIF Relief</th>
            <th>Carried Forward</th>
            <th>Used</th>
            <th>Unused</th>
            <th>Tax Deducted</th>
            <th>NSSF Fund</th>
            <th>NHIF Contribution</th>
            <th>Welfare</th>
            <th>Union Dues</th>
            <th>Housing Levy</th>
            <th>Advances</th>
            <th>Loan Repayments</th>
            <th>Court Attachments</th>
            <th>Service Charge</th>
            <th>Net Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payslip.map((payslip) => (
            <tr key={payslip.id}>
              <td>{payslip.name || "N/A"}</td>
              <td>{payslip.basic_salary}</td>
              <td>{payslip.Service_charge}</td>
              <td>{payslip.Gross_pay}</td>
              <td>{payslip.Provident_Pension}</td>
              <td>{payslip.cash_pay_loan_divident}</td>
              <td>{payslip.ROUND_DOWN_TO}</td>
              <td>{payslip.BENEFITS}</td>
              <td>{payslip.TOTAL}</td>
              <td>{payslip.if_free_housing_add_15}</td>
              <td>{payslip.chargeable_pay}</td>
              <td>{payslip.taxed_charged}</td>
              <td>{payslip.Monthly_personal_relief}</td>
              <td>{payslip.NHIF_relief}</td>
              <td>{payslip.carried_forward}</td>
              <td>{payslip.USED}</td>
              <td>{payslip.UNUSED}</td>
              <td>{payslip.TAX_DEDUCTED}</td>
              <td>{payslip.NSSF_fund}</td>
              <td>{payslip.NHIF_CONTRIBUTION}</td>
              <td>{payslip.WELFARE}</td>
              <td>{payslip.UNION_DUES}</td>
              <td>{payslip.HOUSING_LEVY}</td>
              <td>{payslip.ADVANCES}</td>
              <td>{payslip.LOAN_REPAYMENTS}</td>
              <td>{payslip.COURT_ATTACHMENTS}</td>
              <td>{payslip.SERVICE_CHARGED}</td>
              <td>{payslip.Net_salary}</td>
              <td>
                <Link to={`/dashboard/add_payslip/${payslip.id}`} className="btn btn-info bt-sm me-2">
                  Edit
                </Link>
                <button
                  className="btn btn-warning bt-sm"
                  onClick={() => handleDelete(payslip.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payslip;
