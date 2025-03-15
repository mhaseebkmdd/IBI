import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <div className="bg-white text-black">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D0BAQH1PxthoJDLiA/company-logo_200_200/company-logo_200_200/0/1630476851974?e=2147483647&v=beta&t=ZLQcnANzU1oTzPI3bBEzZq83Rc1ukYe-w0nuHZHwu3M"
            alt="Logo"
            className="h-25 w-30"
          />
          <span className="text-2xl"></span>
        </div>
        <div className="inline-block border-1 border-black pb-2">
        <div className="flex space-x-4">
          <Link to="/dashboard" className="px-4 py-2 rounded-md hover:bg-red-500  transition duration-300">
            Dashboard
          </Link>
          <Link to="/profile" className="px-4 py-2 rounded-md hover:bg-red-500 transition duration-300">
            Profile
          </Link>
          <Link to="/settings" className="px-4 py-2 rounded-md hover:bg-red-500 transition duration-300">
            Settings
          </Link>
          <Link to="/logout" className="px-4 py-2 rounded-md hover:bg-red-500  transition duration-300">
            Logout
          </Link>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;