import React, { useState, useEffect } from 'react';
import {useNavigate , Link} from "react-router-dom"; // Import useNavigate

const AddLegelHeirs = () => {
  const [formData, setFormData] = useState({
    name: '',
    relation: '',
    gender: '',
    dob: '',
    share: '',
    profileImage: null,
  });
const [dataFromDatabase, setDataFromDatabase] = useState(null);

  // Mock function to simulate fetching data from a database
  useEffect(() => {
    // Simulate fetching data from a database (this could be replaced with an actual API call)
    const fetchData = () => {
      const fetchedData = {
        name: 'John Doe',
        relation: 'Father',
        gender: 'Male',
        doa: '1980-01-01',
        share: '50%',
        profileImage: 'https://img.freepik.com/free-photo/portrait-wise-person_52683-100915.jpg',
      };
      setDataFromDatabase(fetchedData);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        profileImage: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    // Handle form submission logic here (e.g., send data to an API)
  };

  const navigate = useNavigate();  // Initialize the navigate function
  // Function to navigate back
  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // Function to navigate forward to the next page
  const goNext = () => {
    navigate('/dashboard/landtransfered');  // Replace '/next-page' with the actual path to the next page
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
    <div className="bg-white text-black min-h-screen flex justify-center items-center">
      
      <div className="flex w-full  bg-white shadow-lg rounded-lg p-6">
        
        {/* Left Side Form Section */}
        <div className="flex flex-col items-center justify-center w-64 m-4">
  <div className="w-48 h-48 bg-white rounded-full flex justify-center items-center mb-4 hover:bg-red-600 transition duration-300 relative outline-1 outline-red-500">
    <input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      className="opacity-0 absolute w-48 h-48 cursor-pointer"
    />
    {formData.profileImage ? (
      <img
        src={formData.profileImage}
        alt="Profile"
        className="w-48 h-48 rounded-full object-cover"
      />
    ) : (
      <span className="text-center text-black">Add Image</span>
    )}
  </div>



          <br />
          <br />
          <br />
          <br />
          
       {/* Rectangle (Profile Image Upload Area) */}
<div className="w-64 h-46 bg-white rounded-md flex justify-center items-center hover:bg-red-600 transition duration-300 relative outline-1 outline-red-500">
  <input
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    className="opacity-0 absolute w-full h-full cursor-pointer"
  />
  {formData.profileImage ? (
    <img
      src={formData.profileImage}
      alt="Profile"
      className="w-full h-full object-cover rounded-md"
    />
  ) : (
    <span className="text-center text-black">Add CNIC</span>
  )}
</div>

        </div>

        {/* Right Side Form Section */}
        <div className="flex-1 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-black mb-6">Add - Legal Heirs</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-black font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter Full Name"
                required
              />
            </div>

            {/* Relation Field */}
            <div className="mb-4">
              <label htmlFor="relation" className="block text-black font-medium mb-2">Relation</label>
              <input
                type="text"
                id="relation"
                name="relation"
                value={formData.relation}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter Relation"
                required
              />
            </div>

            {/* Gender Field */}
            <div className="mb-4">
              <label htmlFor="gender" className="block text-black font-medium mb-2">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Date of Birth Field */}
            <div className="mb-6">
              <label htmlFor="dob" className="block text-black font-medium mb-2">Date of Add</label>
              <input
                type="date"
                id="doa"
                name="doa"
                value={formData.doa}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Share Field */}
            <div className="mb-6">
              <label htmlFor="share" className="block text-black font-medium mb-2">Share (Shariah)</label>
              <input
                type="text"
                id="share"
                name="share"
                value={formData.share}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
                placeholder="Share (Shariah)"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center items-center h-full">
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded-md border border-red-500 hover:bg-red-500 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Side Data Display Box */}
        <div className="flex-1 p-8 rounded-lg shadow-lg w-full max-w-md bg-white mt-6">
          <h3 className="text-xl font-bold text-center mb-4">Current Legal Heirs</h3>
          <div className="space-y-4">
            {dataFromDatabase ? (
              <>
              
                <p><strong>Relation:</strong> {dataFromDatabase.relation}</p>
                <p><strong>Gender:</strong> {dataFromDatabase.gender}</p>
                <p><strong>Date of Add:</strong> {dataFromDatabase.doa}</p>
                <p><strong>Share (Shariah):</strong> {dataFromDatabase.share}</p>
                <img
                  src={dataFromDatabase.profileImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover mx-auto"
                />
              </>
            ) : (
              <p>Loading data...</p>
            )}
          </div>
        </div>
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

export default AddLegelHeirs;
