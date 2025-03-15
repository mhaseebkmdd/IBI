import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const FileTransfered = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to navigate back
  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // Function to navigate forward to the next page
  const goNext = () => {
    navigate('/dashboard/firprint');  // Replace '/next-page' with the actual path to the next page
  };

  // Apply print-specific styles when the component is loaded
  useEffect(() => {
    const printStyles = `
      @media print {
        body {
          visibility: hidden;
        }
        .printable {
          visibility: visible;
        }
        .no-print {
          display: none;
        }
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = printStyles;
    document.head.appendChild(styleSheet);

    return () => {
      // Clean up the added styles
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="bg-white text-black min-h-screen flex flex-col px-4">
      <div className="pt-10 text-4xl text-center">
        <h1 className="inline-block w-full border-b-1 border-black pb-2">FIR / Access File</h1>
      </div>
      
      {/* Navigation buttons - Visible on screen, hidden on print */}
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
      
              <Link to="/dashboard/addlegalheirs">
                <button className="bg-white-300 hover:bg-red-500 text-black-800 py-2 px-4 rounded-l">
                  User Record Nominee
                </button>
              </Link>
      
              <Link to="/dashboard/landtransdered">
                <button className="bg-white-300 hover:bg-red-500 text-black-800 py-2 px-4 rounded-r">
                 File Transfered
                </button>
              </Link>
      
              <Link to="/dashboard/fileleased">
                <button className="bg-white-300 hover:bg-red-500 text-black-800 py-2 px-4 rounded-r">
                 File Leased
                </button>
              </Link>
      
              <Link to="/dashboard/filedemareation">
                <button className="bg-white-300 hover:bg-red-500 text-black-800 py-2 px-4 rounded-r">
                 File Demareation
                </button>
              </Link>
      
              
              <Link to="/dashboard/filepossession">
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

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md printable">
          <div className="flex justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-semibold">Transfer User Record</span>
            </div>
          </div>
 
        {/* From Section */}
<div className="flex flex-col p-4 border rounded mb-4">
  <h3 className="text-lg font-semibold">From</h3>
  {/* Image and Checkbox Section */}
  <div className="flex items-center mb-2">
    
    {/* First Image and Checkbox (Left Box) */}
    <div className="flex items-center w-1/4 mr-4">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47MMtx01iTNt-rbNYKL3vCbBV1upHLFLu4A&s" 
        alt="Profile 1" 
        className="h-20 w-40" 
      />
      <input type="checkbox" className="mr-2" /> Verified
    </div>

    {/* Second Image and Checkbox (Center Box - Wider) */}
    <div className="flex items-center w-1/2 mr-4 justify-center">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47MMtx01iTNt-rbNYKL3vCbBV1upHLFLu4A&s" 
        alt="Profile 2" 
        className="h-20 w-40" 
      />
      <input type="checkbox" className="mr-2" /> Verified
    </div>

    {/* Third Image and Checkbox (Right Box) */}
    <div className="flex items-center w-1/4">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47MMtx01iTNt-rbNYKL3vCbBV1upHLFLu4A&s" 
        alt="Profile 3" 
        className="h-20 w-40" 
      />
      <input type="checkbox" className="mr-2" /> Verified
    </div>
  </div>

  {/* Input Fields Below */}
  <div>
    Property Number: <input type="text" placeholder="Property Number" className=" p-2 border rounded mb-2" /> <br />
    Owner Name: <input type="text" placeholder="Owner Name" className=" p-2 border rounded mb-2" /> <br />
    Date & Time: <input type="datetime-local" className=" p-2 border rounded mb-2" /> <br />
    Here For: 
    <select className=" p-2 border rounded">
      <option>Purpose</option>
      <option>Purpose 1</option>
      <option>Purpose 2</option>
    </select>
  </div>
  </div>

    

          {/* To Section */}
          <div className="flex flex-col p-4 border rounded mb-4">
            <h3 className="text-lg font-semibold">To</h3>
            <div className="flex items-center mb-2">
  {/* First Image and Checkbox */}
  <div className="flex justify-between items-center mb-2">
  {/* First Image and Checkbox (Left Box) */}
  <div className="flex items-center w-1/4 mr-8">
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47MMtx01iTNt-rbNYKL3vCbBV1upHLFLu4A&s" 
      alt="Profile 1" 
      className="h-20 w-40" 
    />
    <input type="checkbox" className="mr-2" /> Verified
  </div>

  {/* Second Image and Checkbox (Center Box - Wider) */}
  <div className="flex items-center w-2/4 mr-8 justify-center">
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47MMtx01iTNt-rbNYKL3vCbBV1upHLFLu4A&s" 
      alt="Profile 2" 
      className="h-20 w-40" 
    />
    <input type="checkbox" className="mr-2" /> Verified
  </div>

  {/* Third Image and Checkbox (Right Box) */}
  <div className="flex items-center w-1/4">
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47MMtx01iTNt-rbNYKL3vCbBV1upHLFLu4A&s" 
      alt="Profile 3" 
      className="h-20 w-40" 
    />
    <input type="checkbox" className="mr-2" /> Verified
  </div>
</div>

</div>
<div className="flex">
  {/* Left Section: Property Details */}
  <div className="flex-1 p-4">
    <h3 className="text-lg font-semibold mb-4">From</h3>
    <div>
      Property Number: <input type="text" placeholder="Property Number" className=" p-2 border rounded mb-2" /> <br />
      Owner Name: <input type="text" placeholder="Owner Name" className=" p-2 border rounded mb-2" /> <br />
      Date & Time: <input type="datetime-local" className=" p-2 border rounded mb-2" /> <br />
      Here For:  
      <select className=" p-2 border rounded">
        <option>Purpose</option>
        <option>Purpose 1</option>
        <option>Purpose 2</option>
      </select>
    </div>
  </div>

  {/* Right Section: Received Charges */}
  <div className="flex-1 p-1 border rounded ml-0">
  <h3 className="text-sm font-semibold mb-1">Revd. Charges</h3>
  <div>
    PKR: <input type="text" placeholder="PKR" className="p-1 border rounded mb-1" /> <br />
    Model: <input type="text" placeholder="Model" className="p-1 border rounded mb-1" />
    <textarea placeholder="Notes" className="p-2 border rounded mb-1" rows="1"></textarea>
  </div>
</div>

</div>
</div>
<br />
           {/* Buttons at the bottom */}
      <div className="flex justify-between space-x-4 mb-4">
        <button
          onClick={goBack}  // Back button functionality
          className="bg-red-500  hover:bg-red-500 text-black py-2 px-10 rounded-l"
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
      </div>
    </div>
  );
};

export default FileTransfered;