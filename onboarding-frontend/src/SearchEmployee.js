import React, { useState } from 'react';
import axios from 'axios';
import './SearchEmployee.css'; // Import the CSS file for styling

const SearchEmployee = () => {
  const [id, setId] = useState('');
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      setError('');
      const response = await axios.get(`http://localhost:5000/search-employee?id=${id}`);
      setEmployee(response.data);
    } catch (error) {
      console.error(error.response.data);
      setEmployee(null);
      setError('Employee not found');
    }
  };

  return (
    <div className="search-employee-container">
      <div className="background-image"></div>
      <div className="content">
        <h2>Search Employee</h2>
        <input 
          type="text" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          placeholder="Employee ID" 
          className="input-field"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
        {error && <p className="error-message">{error}</p>}
        {employee && (
          <div className="employee-details">
            <h3>Employee Details</h3>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>ID:</strong> {employee.id}</p>
            <p><strong>Contact:</strong> {employee.contact}</p>
            <p><strong>Address:</strong> {employee.address}</p>
            <p><strong>Salary:</strong> {employee.salary}</p>
            <p><strong>Date of Joining:</strong> {employee.dateOfJoining}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchEmployee;
