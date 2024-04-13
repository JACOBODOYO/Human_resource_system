import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function LeaveCalculator() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [publicHolidays, setPublicHolidays] = useState([]);
  const [leaveDays, setLeaveDays] = useState(0);

  const handleCalculateLeave = () => {
    if (!startDate || !endDate) {
      alert('Please select start date and end date');
      return;
    }

    const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const leaveDaysExcludingHolidays = totalDays - publicHolidays.length;
    setLeaveDays(leaveDaysExcludingHolidays);
  };

  return (
    <div>
      <h2>Leave Calculator</h2>
      <div>
        <label>Start Date:</label>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      </div>
      <div>
        <label>End Date:</label>
        <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
      </div>
      <div>
        <label>Public Holidays:</label>
        <input
          type="text"
          placeholder="Enter public holidays separated by commas"
          value={publicHolidays.join(',')}
          onChange={e => setPublicHolidays(e.target.value.split(','))}
        />
      </div>
      <button onClick={handleCalculateLeave}>Calculate Leave Days</button>
      {leaveDays > 0 && (
        <div>
          <h3>Leave Days: {leaveDays}</h3>
        </div>
      )}
    </div>
  );
}

export default LeaveCalculator;
