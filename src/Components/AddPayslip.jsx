import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPayslip = () => {
  const [payslip, setPayslip] = useState({
    name: "",
    basic_salary: "",
    Service_charge: "",
    Gross_Pay: "",
    Provident_Pension: "",
    cashPayLoanDivident: "",
    roundDownTo: "",
    benefits: "",
    total: "",
    ifFreeHousing: "",
    chargeablePay: "",
    taxedCharged: "",
    monthlyPersonalRelief: "",
    nhifRelief: "",
    carriedForward: "",
    used: "",
    unused: "",
    taxDeducted: "",
    nssfFund: "",
    nhifContribution: "",
    welfare: "",
    unionDues: "",
    housingLevy: "",
    advances: "",
    loanRepayments: "",
    courtAttachments: "",
    serviceCharge: "",
    netSalary: "",

  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!payslip.name) {
        alert("Please enter a name");
        return;
      }

    const formData = new FormData();
    formData.append("name", payslip["name"]);
    formData.append("basic_salary", payslip.basic_salary);
    formData.append("Service_charge", payslip.Service_charge);
    formData.append("Gross_pay", payslip.Gross_Pay);
    formData.append("Provident_Pension", payslip.Provident_Pension);
    formData.append("cashPayLoanDivident", payslip.cashPayLoanDivident);
    formData.append("ROUND_DOWN_TO", payslip.roundDownTo);
    formData.append("BENEFITS", payslip.benefits);
    formData.append("TOTAL", payslip.total);
    formData.append("ifFreeHousing", payslip.ifFreeHousing);
    formData.append("chargeablePay", payslip.chargeablePay);
    formData.append("taxedCharged", payslip.taxedCharged);
    formData.append("monthlyPersonalRelief", payslip.monthlyPersonalRelief);
    formData.append("nhifRelief", payslip.nhifRelief);
    formData.append("carriedForward", payslip.carriedForward);
    formData.append("used", payslip.used);
    formData.append("unused", payslip.unused);
    formData.append("taxDeducted", payslip.taxDeducted);
    formData.append("nssfFund", payslip.nssfFund);
    formData.append("nhifContribution", payslip.nhifContribution);
    formData.append("welfare", payslip.welfare);
    formData.append("unionDues", payslip.unionDues);
    formData.append("housingLevy", payslip.housingLevy);
    formData.append("advances", payslip.advances);
    formData.append("loanRepayments", payslip.loanRepayments);
    formData.append("courtAttachments", payslip.courtAttachments);
    formData.append("serviceCharge", payslip.serviceCharge);
    formData.append("netSalary", payslip.netSalary);

    axios
      .post("http://localhost:3000/auth/add_payslip", formData)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/payslip");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setPayslip({ ...payslip, [name]: value });
  };

  return (
    <div className="d-flex j ustify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3>Add Payslip</h3>

        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              autoComplete="off"
              name="name"
              value={payslip["name"]}
              id="name"
              placeholder="Enter name"
            onChange={handleChange}
            //   onChange={(e) => setPayslip({ ...payslip, name: e.target.value })}
            
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputSalary" className="form-label">
              Basic Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) =>
                setPayslip({ ...payslip, basic_salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputServiceCharge" className="form-label">
              Service charge
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputServiceCharge"
              placeholder="Enter Service charge"
              autoComplete="off"
              onChange={(e) =>
                setPayslip({ ...payslip, Service_charge: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputGrossPay" className="form-label">
              Gross Pay
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Gross pay"
              autoComplete="off"
              onChange={(e) =>
                setPayslip({ ...payslip, Gross_Pay: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputProvidentPension" className="form-label">
              provident Pension
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputProvidentPension"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) =>
                setPayslip({ ...payslip, Provident_Pension: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inpuCashPayLoanDivident" className="form-label">
              cash pay loan divident
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputCashPayLoanDivident"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, cashPayLoanDivident: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputRoundDownTo" className="form-label">
              ROUND DOWN TO
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputRoundDouwnTo"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, roundDownTo: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputBenefits" className="form-label">
              BENEFITS
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputBenefits"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, benefits: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputTotal" className="form-label">
              TOTAL
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputTotal"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, total: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputIfFreeHousingPay15" className="form-label">
              if free housing pay 15%
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputIfFreeHousingPay15"
              placeholder="Enter free housing"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, ifFreeHousing: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputChargeablePay" className="form-label">
              chargeable pay
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputChargeablePay"
              placeholder="Enter chargeable pay"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, chargeablePay: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputTaxedCharged" className="form-label">
              Taxed charged
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputTaxedCharged"
              placeholder="Enter taxed charged"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, taxedCharged: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputMonthlyPersonalRelief" className="form-label">
              monthly personal relief
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputMonthlyPersonalRelief"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, monthlyPersonalRelief: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputnhifFund" className="form-label">
              nhif Relief
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputnhifFund"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, nhifRelief: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputCarriedForward" className="form-label">
              carried forwad
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputCarriedForward"
              placeholder="Enter carried forward"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, carriedForward: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputUsed" className="form-label">
              USED
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputUsed"
              placeholder="Enter used"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, used: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputUnused" className="form-label">
              UNUSED
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputUnused"
              placeholder="Enter unused"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, unused: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputTaxDeducted" className="form-label">
              TAX DEDUCTED
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputTaxDeducted"
              placeholder="Enter tax charged"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, taxedCharged: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputnssfFund" className="form-label">
              N.S.S.F fund
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputnssfFund"
              placeholder="Enter nssf"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, nssfFund: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputnhifContribution" className="form-label">
              N.H.I.F contribution
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputnhifContribution"
              placeholder="Enter nhif"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, nhifContribution: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputWelfare" className="form-label">
              WELFARE
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputWelfare"
              placeholder="Enter welfare"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, welfare: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputUnionDues" className="form-label">
              UNION DUES 
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputUnionDues"
              placeholder="Enter union dues"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, unionDues: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputHousingLevy" className="form-label">
              HOUSING LEVY
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputHousingLevy"
              placeholder="Enter housing levy"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, housingLevy: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAdvances" className="form-label">
              ADVANCES
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAdvances"
              placeholder="Enter advance"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, advances: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputLoanRepayments" className="form-label">
              LOAN REPAYMENTS
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputLoanRepayments"
              placeholder="Enter loan repayments"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, loanRepayments: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputCourtAttachments" className="form-label">
              COURT ATTACHMENTS
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputCourtAttachments"
              placeholder="Enter court attachments"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, courtAttachments: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputServiceCharge" className="form-label">
              SERVICE CHARGED
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputServiceCharge"
              placeholder="Enter SERVE CHARGED"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, serviceCharge: e.target.value})}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputNetSalary" className="form-label">
              NET SALARY
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputNetSalary"
              placeholder="Enter NET SALARY"
              autoComplete="off"
              onChange={(e) => setPayslip({...payslip, netSalary: e.target.value})}
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100">Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// const AddPayslip = () => {
//     const [payslip, setPayslip] = useState({
//       name: "",
//       basicSalary: "",
//       serviceCharge: "",
//       grossPay: "",
//       providentPension: "",
//       cashPayLoanDividend: "",
//       roundDownTo: "",
//       benefits: "",
//       total: "",
//       ifFreeHousing: "",
//       chargeablePay: "",
//       taxedCharged: "",
//       monthlyPersonalRelief: "",
//       nhifRelief: "",
//       carriedForward: "",
//       used: "",
//       unused: "",
//       taxDeducted: "",
//       nssfFund: "",
//       nhifContribution: "",
//       welfare: "",
//       unionDues: "",
//       housingLevy: "",
//       advances: "",
//       loanRepayments: "",
//       courtAttachments: "",
//       serviceCharged: "",
//       netSalary: ""
//     });
  
//     const navigate = useNavigate();
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       axios
//         .post("http://localhost:3000/auth/add_payslip", payslip)
//         .then((result) => {
//           if (result.data.Status) {
//             navigate("/dashboard/payslip");
//           } else {
//             alert(result.data.Error);
//           }
//         })
//         .catch((err) => console.log(err));
//     };
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setPayslip({ ...payslip, [name]: value });
//     };
  
//     return (
//       <div className="d-flex justify-content-center align-items-center mt-3">
//         <div className="p-3 rounded w-50 border">
//           <h3>Add Payslip</h3>
  
//           <form className="row g-1" onSubmit={handleSubmit}>
//             {/* Input fields */}
//             {/* Add onChange handler to each input field */}
//           </form>
//         </div>
//       </div>
//     );
//   };

export default AddPayslip;
