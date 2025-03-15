import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';  // Import useNavigate

const FIRAccessFile = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();  // Initialize the navigate function

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // Handle form submission (in this case, upload logic or logging)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      console.log('File ready to upload:', image);
      // You would typically send the file to the server here
    } else {
      console.log('No image selected');
    }
  };

  // Function to navigate back
  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // Function to navigate forward to the next page
  const goNext = () => {
    navigate('/dashboard/addlegelheir');  // Replace '/next-page' with the actual path to the next page
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col px-4">
      <div className="pt-10 text-4xl text-center">
        <h1 className="inline-block w-full border-b-1 border-black pb-2">FIR / Add File</h1>
      </div>
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
  <div className="text-left mb-6">
  <h1 className="text-3xl ">
    Verify Or Add User Record
  </h1>
</div>


      {/* Flex container for the forms */}
      <div className="flex justify-between space-y-2 ">
        {/* Form 1 */}
        <form onSubmit={handleSubmit} className="pl-20 sm:w-1/3 p-4 space-y-2">
  <h5>Picture</h5>

  {/* Custom file upload area with label */}
  <label 
    htmlFor="file-upload" 
    className="block w-40 h-40 p-4 border-2 border-dashed border-gray-400 text-center text-gray-600 rounded-lg shadow-lg cursor-pointer"
  >
    {/* Placeholder text */}
    <span>Picture</span>
  </label>

  {/* Hidden file input */}
  <input
    id="file-upload"
    type="file"
    onChange={handleFileChange}
    className="hidden"
  />
<div>
            <button
              type="submit"
              className=" px-2 py-2 bg-white-500 text-black rounded-md hover:bg-red-600"
            >
              Add
            </button>
            <button className=" px-2 py-2 bg-white-500 text-black rounded-md hover:bg-red-600">
              Edit
            </button>
            <button className=" px-2 py-2 bg-white-500 text-black rounded-md hover:bg-red-600">
              Delete
            </button>
          </div>
  
</form>


        {/* Form 2 */}
        <form onSubmit={handleSubmit} className="pl-20 sm:w-1/3 p-4 space-y-2">
  <h5>CNIC</h5>

  {/* Custom file upload area with label */}
  <label 
    htmlFor="file-upload" 
    className="block w-60 h-40 p-4 border-2 border-dashed border-gray-400 text-center text-gray-600 rounded-lg shadow-lg cursor-pointer"
  >
    {/* Placeholder text */}
    <span>CNIC</span>
  </label>

  {/* Hidden file input */}
  <input
    id="file-upload"
    type="file"
    onChange={handleFileChange}
    className="hidden"
  />
<div className='flex justify-center'>
            <button
              type="submit"
              className=" px-2 py-2 bg-white-500 text-black rounded-md hover:bg-red-600"
            >
              Add
            </button>
            <button className=" px-2 py-2 bg-white-500 text-black rounded-md hover:bg-red-600">
              Edit
            </button>
            <button className=" px-2 py-2 bg-white-500 text-black rounded-md hover:bg-red-600">
              Delete
            </button>
          </div>
  
</form>


        <form onSubmit={handleSubmit} className="pl-20 sm:w-1/3 p-4 space-y-2">
  <h5>Thumb</h5>

  {/* Custom file upload area with label */}
  <label 
    htmlFor="file-upload" 
    className="block w-40 h-40 p-4 border-2 border-dashed border-gray-400 text-center text-gray-600 rounded-lg shadow-lg cursor-pointer"
  >
    {/* Placeholder text */}
    <span>Thumb</span>
  </label>

  {/* Hidden file input */}
  <input
    id="file-upload"
    type="file"
    onChange={handleFileChange}
    className="hidden"
  />

<div>
            <button
              type="submit"
              className=" px-2 py-2 bg-white-500 text-black rounded-md hover:bg-red-600"
            >
              Add
            </button>
            <button className=" px-2 py-2 bg-white-500 text-black rounded-md hover:bg-red-600">
              Edit
            </button>
            <button className=" px-2 py-2 bg-white-500 text-black rounded-md hover:bg-red-600">
              Delete
            </button>
          </div>
</form>

      </div>
      <div className='pl-20'>
      
        <div>
         <h5>Owner Name</h5>
          <input
          placeholder="Enter Owner Name"
          className="border border-gray-300 px-2 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <h5>Address</h5>
          <input
          type='text'
          placeholder="Enter Address"
          className="border border-gray-300 px-2 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        <div>
         <h5>Enter Telephone Number</h5>
          <input
          type='phone'
          placeholder=" Enter Telephone Number"
          className="border border-gray-300 px-2 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          </div>
        <div>
         <h5>Access Date and Time</h5>
          <input
          type='datetime-local'
          placeholder="Plot Number"
          className="border border-gray-300 px-2 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      
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

export default FIRAccessFile;
