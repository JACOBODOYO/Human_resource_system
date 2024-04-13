 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Submit = () => {
  const [payslip, setPayslip] = useState([]);
  

  const { id } = useParams();
  

  // useEffect(() => {
  //   // Make HTTP request to backend to fetch payslip details based on employee name
  //   axios.get("http://localhost:3000/payslip/" + id)
  //     .then(response => {
  //       setPayslip(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching payslip details:', error);
  //     });
  // }, [id]);

  useEffect(() => {
    // Make HTTP request to backend to fetch payslip details based on employee name
    axios.get(`http://localhost:3000/payslip/${id}`)
      .then(response => {
        setPayslip(response.data);
      })
      .catch(error => {
        console.error('Error fetching payslip details:', error);
      });
  }, [id]);

  
  return (
    <div>
      {/* Display payslip details here */}
      <h2>Payslip Details for {payslip.id} </h2>
      <ul>
        <li>Month: </li>
        <li>Year: </li>
        {/* Add more payslip details as needed */}
      </ul>
    </div>
  );
};

export default Submit;
