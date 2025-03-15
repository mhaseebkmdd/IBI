import React, { useState } from 'react';

const LoginForm = () => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Role:', role);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D0BAQH1PxthoJDLiA/company-logo_200_200/company-logo_200_200/0/1630476851974?e=2147483647&v=beta&t=ZLQcnANzU1oTzPI3bBEzZq83Rc1ukYe-w0nuHZHwu3M" // Replace with your company logo URL
            alt="Company Logo"
            className="mx-auto"
          />
        </div>
        
        <h2 className="text-2xl font-bold text-black text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role Dropdown */}
          <div>
            <label htmlFor="role" className="block text-black">Select Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="staff">Staff</option>
            </select>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-black">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-black">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="Submit"
              className="w-full py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
