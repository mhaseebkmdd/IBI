import React, { useState } from 'react';
import {  useNavigate , Link } from "react-router-dom"; // Import useNavigate

const Fileleased = () => {
  const [file, setFile] = useState(null);
  const [charges, setCharges] = useState('');
  const [isYesSelected, setIsYesSelected] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChargesChange = (e) => {
    setCharges(e.target.value);
  };

  const handleRadioChange = (e) => {
    setIsYesSelected(e.target.value === 'yes');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
  };
const navigate = useNavigate();  // Initialize the navigate function
   // Function to navigate back
   const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // Function to navigate forward to the next page
  const goNext = () => {
    navigate('/dashboard/filedemaraction');  // Replace '/next-page' with the actual path to the next page
  };
  

  return (
<div>  <div>
              <Link to="/dashboard/firacess">
                <button className="bg-white-300 hover:bg-red-500 text-black-800 py-2 px-4 rounded-l">
                  Add
                </button>
              </Link>
      
              <Link to="/dashboard/firverify">
                <button className="bg-white-300 hover:bg-red-500 text-black-800 py-2 px-4 rounded-r">
                  User Record Add
                </button>
              </Link>
      
              <Link to="/dashboard/addlegelheir">
                <button className="bg-white-300 hover:bg-red-500 text-black-800 py-2 px-4 rounded-l">
                  User Record Nominee
                </button>
              </Link>
      
              <Link to="/dashboard/landtransfered">
                <button className="bg-white-300 hover:bg-red-500 text-black-800 py-2 px-4 rounded-r">
                Land Transfered
                </button>
              </Link>
      
              <Link to="/dashboard/fileleased">
                <button className="bg-white-300 hover:bg-red-500 text-black-800 py-2 px-4 rounded-r">
                 File Leased
                </button>
              </Link>
      
              <Link to="/dashboard/filedemaraction">
                <button className="bg-white-300 hover:bg-red-500 text-black-800 py-2 px-4 rounded-r">
                 File Demareation
                </button>
              </Link>
      
              
              <Link to="/dashboard/filepossessian">
                <button className="bg-white-300 hover:bg-red-500 text-black-800 py-2 px-4 rounded-r">
                 File Possession
                </button>
              </Link>
      
              
              <Link to="/dashboard/filemutation">
                <button className="bg-white-300 hover:bg-red-500 text-black-800 py-2 px-4 rounded-r">
                 File Mutation
                </button>
              </Link>
      
              
              <Link to="/dashboard/filedevelopmentcharges">
                <button className="bg-white-300 hover:bg-red-500 text-black-800 py-2 px-4 rounded-r">
                 File Developement Charges
                </button>
              </Link>
            </div>

    <div className="container mx-auto p-4">
      <h3 className="text-lg font-medium mb-4">File Leased</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        
  {/* Radio Buttons for Yes/No */}
        <div className="flex items-center space-x-4">
          <label className="text-black mb-0">File Leased</label>
          
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                name="agreement"
                value="yes"
                checked={isYesSelected === true}
                onChange={handleRadioChange}
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="agreement"
                value="no"
                checked={isYesSelected === false}
                onChange={handleRadioChange}
                required
              />
              No
            </label>
          </div>
        </div>
        {/* File Input */}
        <div className="flex items-center space-x-4">
          <label className="text-black mb-0">Upload File</label>
          <input
            type="file"
            className="p-2 border-2 border-red-500 rounded"
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Input for Charges */}
        <div className="flex items-center space-x-4">
          <label className="text-black mb-0">Enter Charges</label>
          <input
            type="number"
            className="p-2 border-2 border-red-500 rounded"
            value={charges}
            onChange={handleChargesChange}
            placeholder="Enter charges"
          />
        </div>

      

        {/* Submit Button */}
        <div className="flex items-center space-x-4">
          <button type="submit" className="p-2 bg-red-500 text-white rounded">
            Submit
          </button>
        </div>
      </form>
       
    </div>
    {/* Buttons at the bottom */}
    <div className="flex justify-between space-x-4 mb-4">
        <button
          onClick={goBack}  // Back button functionality
          className="bg-red-500 hover:bg-red-500 text-black py-2 px-10 rounded-l"
        >
          Back
        </button>
        <button
          onClick={goNext}  // Next button functionality
          className="bg-red-500 hover:bg-red-500 text-black py-2 px-10 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Fileleased;
