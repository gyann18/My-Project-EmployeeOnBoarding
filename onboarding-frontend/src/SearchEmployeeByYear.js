import React, { useState } from 'react';

const SearchEmployeeByYear = () => {
  const [searchYear, setSearchYear] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchEmployeeByYear = async () => {
    try {
      const response = await fetch(`http://localhost:5000/search-employee-year?year=${searchYear}`);
      const data = await response.json();

      if (response.status === 200) {
        setSearchResults(data);
      } else {
        alert(data.message);
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error searching employee by year:', error);
      alert('Error searching employee by year');
    }
  };

  return (
    <div style={{ position: 'fixed', top: '20px', left: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2>Search Employee by Year</h2>
      <input
        type="number"
        value={searchYear}
        onChange={(e) => setSearchYear(e.target.value)}
        placeholder="Year"
        style={{ width: 'calc(100% - 80px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
      <button onClick={searchEmployeeByYear} style={{ width: 'calc(100% - 80px)', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
        Search
      </button>

      {searchResults.length > 0 && (
        <div className="result" style={{ marginTop: '10px' }}>
          {searchResults.map((emp, index) => (
            <div key={index}>
              <p>Name: {emp.name}</p>
              <p>ID: {emp.id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchEmployeeByYear;
