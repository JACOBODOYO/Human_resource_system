import React, { useState } from 'react';
import axios from 'axios';

const Submit = () => {
  const [payslipId, setPayslipId] = useState('');
  const [payslipDetails, setPayslipDetails] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/api/payslip/${payslipId}`);
      setPayslipDetails(response.data);
    } catch (error) {
      console.error('Error fetching payslip details:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={payslipId}
          onChange={(e) => setPayslipId(e.target.value)}
          placeholder="Enter payslip ID"
        />
        <button type="submit">Submit</button>
      </form>
      {payslipDetails && (
        <div>
          <h2>Payslip Details:</h2>
          <pre>{JSON.stringify(payslipDetails, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Submit;
