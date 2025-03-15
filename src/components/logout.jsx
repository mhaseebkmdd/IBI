// Logout.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any authentication tokens or session data
    localStorage.removeItem('authToken'); // Example of clearing auth token
    // Redirect the user to the login page
    navigate('/dashboard/login');
  }, [navigate]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">Logging out...</h1>
    </div>
  );
};

export default Logout;
