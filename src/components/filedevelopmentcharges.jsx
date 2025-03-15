import React  from 'react';
import { useNavigate , Link } from "react-router-dom"; // Import useNavigate


const FileDevelopmentCharges = () => { 
  const navigate = useNavigate();  // Initialize the navigate function
  // Function to navigate back
  const goBack = () => {
   navigate(-1); // Go back to the previous page
 };

 // Function to navigate forward to the next page
 const goNext = () => {
   navigate('/dashboard');  // Replace '/next-page' with the actual path to the next page
 };
 

  return (
<div>
<div>
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
            <h3 className="text-lg font-medium mb-4">File Development Charges</h3>
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
          Go To Dashboard
        </button>
      </div>
</div>
 
  );
};

export default FileDevelopmentCharges;
