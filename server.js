const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({ message: 'Username and password are required' });
  }
  if (username === 'Admin' && password === '2329') {
    res.status(200).send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

// Add employee route
app.post('/add-employee', async (req, res) => {
  try {
    const employeeData = req.body;
    const filePath = path.join(__dirname, 'employees.txt');
    await fs.appendFile(filePath, JSON.stringify(employeeData) + '\n');
    res.status(200).send({ message: 'Employee added successfully' });
  } catch (error) {
    console.error('Error saving employee data:', error);
    res.status(500).send({ message: 'Error saving employee data' });
  }
});

// Endpoint to search for an employee by ID
app.get('/search-employee', async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).send({ message: 'ID query parameter is required' });
    }
    const filePath = path.join(__dirname, 'employees.txt');
    const data = await fs.readFile(filePath, 'utf8');
    const employees = data.split('\n').filter(line => line.trim() !== '').map(line => JSON.parse(line));
    const employee = employees.find(emp => emp.id.toString() === id.toString());
    if (employee) {
      res.status(200).send(employee);
    } else {
      res.status(404).send({ message: 'Employee not found' });
    }
  } catch (error) {
    console.error('Error reading employee data:', error);
    res.status(500).send({ message: 'Error reading employee data' });
  }
});


// Search employee by year route
app.get('/search-employee-year', async (req, res) => {
  try {
    const { year } = req.query;
    if (!year || isNaN(year)) {
      return res.status(400).send({ message: 'Valid year query parameter is required' });
    }
    const filePath = path.join(__dirname, 'employees.txt');
    const data = await fs.readFile(filePath, 'utf8');
    const employees = data.split('\n').filter(line => line).map(line => JSON.parse(line));
    const employeesInYear = employees.filter(emp => {
      // Extract the year from the dateOfJoining property and compare with the provided year
      const employeeYear = new Date(emp.dateOfJoining).getFullYear();
      return employeeYear === parseInt(year);
    });
    if (employeesInYear.length > 0) {
      res.status(200).send(employeesInYear);
    } else {
      res.status(404).send({ message: 'No employees found for the given year' });
    }
  } catch (error) {
    console.error('Error reading employee data:', error);
    res.status(500).send({ message: 'Error reading employee data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
