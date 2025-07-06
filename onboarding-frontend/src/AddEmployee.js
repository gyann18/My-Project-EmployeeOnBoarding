import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    id: '',
    contact: '',
    address: '',
    salary: '',
    dateOfJoining: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/add-employee', employee);
      alert('Employee added successfully');
      setEmployee({
        name: '',
        id: '',
        contact: '',
        address: '',
        salary: '',
        dateOfJoining: ''
      }); // Clear the form fields after submission
    } catch (error) {
      console.error(error);
      alert('Error adding employee');
    }
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '34px' }}>Add Employee</h2>
      <form style={{ display: 'grid', gap: '10px' }}>
        <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Name (Max 20 characters)" maxLength={20} />
        <input type="text" name="id" value={employee.id} onChange={handleChange} placeholder="ID (4 numbers)" pattern="\d{4}" />
        <input type="tel" name="contact" value={employee.contact} onChange={handleChange} placeholder="Contact (10 numbers)" pattern="\d{10}" />
        <input type="text" name="address" value={employee.address} onChange={handleChange} placeholder="Address" />
        <input type="number" name="salary" value={employee.salary} onChange={handleChange} placeholder="Salary" />
        <input type="date" name="dateOfJoining" value={employee.dateOfJoining} onChange={handleChange} />
        <button type="button" onClick={handleSubmit}>Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
