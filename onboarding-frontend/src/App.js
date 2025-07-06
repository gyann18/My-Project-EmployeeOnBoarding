import React, { useState } from 'react';
import Login from './Login';
import AddEmployee from './AddEmployee';
import SearchEmployee from './SearchEmployee';
import SearchEmployeeByYear from './SearchEmployeeByYear';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <AddEmployee />
          <SearchEmployee />
          <SearchEmployeeByYear />
        </div>
      )}
    </div>
  );
};

export default App;
