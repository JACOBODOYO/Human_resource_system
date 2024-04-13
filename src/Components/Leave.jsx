import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
Link
function Leave() {
  const [leaveDays, setLeaveDays] = useState([]);

  useEffect(() => {
    // Fetch leave days data from the server
    axios.get('http://localhost:3000/employee/leave-days')
      .then(response => {
        setLeaveDays(response.data);
      })
      .catch(error => {
        console.error('Error fetching leave days:', error);
      });
  }, []);

  return (
    <div>
      <h2>Leave Days</h2>
      <ul>
        {leaveDays.map((day, index) => (
          <li key={index}>
            <strong>Date:</strong> {day.date} | <strong>Reason:</strong> {day.reason}
          </li>
        ))}
      </ul>
      <Link to="/employee_detail/:id/leaveCalculator/" className="nav-link m-4 px-0 align-middle text-green">
        <div className="btn btn-primary">Calculate leave</div>
      </Link>
    </div>
  );
}

export default Leave;
