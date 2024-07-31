import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/employee_login", (req, res) => {
  const sql = "SELECT * from employee Where email = ?";
  con.query(sql, [req.body.email], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      bcrypt.compare(req.body.password, result[0].password, (err, response) => {
        if (err) return res.json({ loginStatus: false, Error: "Wrong Password" });
        if(response) {
            const email = result[0].email;
            const token = jwt.sign(
              { role: "employee", email: email, id: result[0].id },
                "jwt_secret_key",
              { expiresIn: "1d" }
            );
            res.cookie("token", token);
            return res.json({ loginStatus: true, id: result[0].id});
        }
      }); 

    } else {
      return res.json({ loginStatus: false, Error: "wrong email or password" });
    }
  });
});




router.get('/detail/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employee where id = ?"
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Status: false});
        return res.json(result)
    })
  })

 // Assuming you are using Express.js
router.get('/payslip/:id', (req, res) => {
  const payslipId = req.params.id;

  // Use the payslipId to fetch the corresponding payslip data from the database
  // Replace this with your actual database query
  const payslipData = "SELECT * FROM payslip WHERE id = ?";
  con.query(payslipData, [payslipId], (err, result) => {
    if (err) {
      // Handle database error
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (!result || result.length === 0) {
      // If payslip data is not found, return a 404 status
      return res.status(404).json({ error: 'Payslip not found' });
    }

    // If payslip data is found, return it in the response
    res.json(result);
  });
});

router.get('/employee/leave-days', (req, res) => {
  // Implement the logic to calculate leave days here
  // For example, you can fetch employee information from the database and calculate leave days

  // Dummy response for demonstration purposes
  const leaveDays = 10; // Replace with the actual calculated leave days

  // Send the calculated leave days as a response
  res.json({ leaveDays });
});

  router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({Status: true})
  })

export { router as EmployeRouter };
