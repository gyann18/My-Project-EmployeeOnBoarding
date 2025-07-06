// Import necessary modules
const axios = require('axios');

// Define the base URL of your backend server
const BASE_URL = 'http://localhost:5000'; // Update with your actual backend URL

describe('Backend API Tests', () => {
  // Test for the login endpoint
  test('Login endpoint should return a success message on successful login', async () => {
    const response = await axios.post(`${BASE_URL}/login`, {
      username: 'Admin',
      password: '2329'
    });
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('Login successful');
  });

  // Test for the add employee endpoint
  test('Add employee endpoint should add an employee successfully', async () => {
    const employeeData = {
      id: 1,
      name: 'John Doe',
      dateOfJoining: '2024-06-06'
      // Add other required fields as per your schema
    };
    const response = await axios.post(`${BASE_URL}/add-employee`, employeeData);
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('Employee added successfully');
  });

  // Test for the search employee by ID endpoint
  test('Search employee by ID endpoint should return the correct employee details by ID', async () => {
    const id = 1; // Assuming an employee with ID 1 exists
    const response = await axios.get(`${BASE_URL}/search-employee?id=${id}`);
    expect(response.status).toBe(200);
    // Add more specific assertions based on your data
  });

  // Test for the search employee by year endpoint
  test('Search employee by year endpoint should return employees joined in a specific year', async () => {
    const year = 2024; // Assuming employees joined in 2024
    const response = await axios.get(`${BASE_URL}/search-employee-year?year=${year}`);
    expect(response.status).toBe(200);
    // Add more specific assertions based on your data
  });
});
