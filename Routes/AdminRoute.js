import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";

const router = express.Router();

const app = express();
app.use(express.json());

router.post("/adminlogin", (req, res) => {
  const sql = "SELECT * from admin Where email = ? and password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "admin", email: email, id: result[0].id },
        "jwt_secret_key",
        {
          expiresIn: "1d",
        }
      );
      res.cookie("token", token);
      return res.json({ loginStatus: true });
    } else {
      return res.json({ loginStatus: false, Error: "wrong email or password" });
    }
  });
});

router.get("/category", (req, res) => {
  const sql = "SELECT * FROM category";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.post("/add_category", (req, res) => {
  const sql = "INSERT INTO category (`name`) VALUES (?)";
  con.query(sql, [req.body.category], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true });
  });
});

// image upload
const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, "Public/Images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});
// end image upload

router.post("/add_employee", upload.single("image"), (req, res) => {
  const sql = `INSERT INTO employee (name,email,password,address,salary,category_id, image) VALUES (?)`;
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    const values = [
      req.body.name,
      req.body.email,
      hash,
      req.body.address,
      req.body.salary,
      req.body.category_id,
      req.file.filename,
    ];

   
    con.query(sql, [values], (err, result) => {
      if (err) {
        console.log("Error inserting employee:", err);
        return res.json({ Status: false, Error: "Query Error" });
      }
      return res.json({ Status: true });
    });
  });
});

router.post("/add_payslip", (req, res) => {
  // const sql = `INSERT INTO payslip (name, "basic salary", "Gross pay", "Provident_Pension", "ROUND DOWN TO", BENEFITS, TOTAL, "if free housing add 15%", "chargeable pay", "taxed charged", "Monthly personal relief", "NHIF relief", "carried forward", USED, UNUSED, "TAX DEDUCTED", "N.S.S.F fund", "N.H.I.F CONTRIBUTION", WELFARE, "UNION DUES", "HOUSING LEVY", ADVANCES, "LOAN REPAYMENTS", "COURT ATTACHMENTS", "SERVICE CHARGED") VALUES (?)`;
 const sql = `INSERT INTO payslip (name, basic_salary, Service_charge, Gross_pay, Provident_Pension, cash_pay_loan_divident, ROUND_DOWN_TO, BENEFITS, TOTAL, if_free_housing_add_15, chargeable_pay, taxed_charged, Monthly_personal_relief, NHIF_relief, carried_forward, USED, UNUSED, TAX_DEDUCTED, NSSF_fund, NHIF_CONTRIBUTION, WELFARE, UNION_DUES, HOUSING_LEVY, ADVANCES, LOAN_REPAYMENTS, COURT_ATTACHMENTS, SERVICE_CHARGED, Net_salary) VALUES (?)`;

const values = [
  req.body.name,
  req.body.basic_salary,
  req.body.Service_charge,
  req.body.grossPay,
  req.body.providentPension,
  req.body.cashPayLoanDivident,
  req.body.roundDownTo,
  req.body.benefits,
  req.body.total,
  req.body.ifFreeHousing,
  req.body.chargeablePay,
  req.body.taxedCharged,
  req.body.monthlyPersonalRelief,
  req.body.nhifRelief,
  req.body.carriedForward,
  req.body.used,
  req.body.unused,
  req.body.taxDeducted,
  req.body.nssfFund,
  req.body.nhifContribution,
  req.body.welfare,
  req.body.unionDues,
  req.body.housingLevy,
  req.body.advances,
  req.body.loanRepayments,
  req.body.courtAttachments,
  req.body.servidesCharge,
  req.body.netSalary
];

// Your SQL query execution code goes here


   
    con.query(sql, [values], (err, result) => {
      if (err) {
        console.log("Error inserting payslip:", err);
        return res.json({ Status: false, Error: "Query Error" });
      }
      return res.json({ Status: true });
    });
  });


router.get("/employee", (req, res) => {
  const sql = "SELECT * FROM employee";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/payslip", (req, res) => {
  const sql = "SELECT * from payslip";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/employee/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM employee WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/payslip/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM payslip WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.put("/edit_employee/:id", (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE employee 
       set name = ?, email= ?, salary = ?, address = ?, category_id = ? 
       Where id = ? `;
  const values = [
    req.body.name,
    req.body.email,
    req.body.salary,
    req.body.address,
    req.body.category_id,
  ];
  con.query(sql, [...values, id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.delete("/delete_employee/:id", (req, res) => {
  const id = req.params.id;
  const sql = "delete from employee where id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/admin_count", (req, res) => {
  const sql = "select count(id) as admin from admin";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/employee_count", (req, res) => {
  const sql = "select count(id) as employee from employee";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/salary_count", (req, res) => {
  const sql = "select sum(salary) as salary from employee";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/admin_records", (req, res) => {
  const sql = "select * from admin";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: true });
});



export { router as adminRouter };
