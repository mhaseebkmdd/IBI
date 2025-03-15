import React, { useState } from 'react';
const FileUploadPage = () => {
  const [formData, setFormData] = useState({
    plotAddress: '',
    ownerName: '',
    documentType: '',
    file: null,
    fileno: '', // Added file/document number field
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      file: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can handle the actual file upload logic here, e.g., make an API request to upload the file
  };


  
  const data = [
    {
      plotAddress: 'X-123',
      ownerName: 'Ahmed',
      nagsha: 'Yes',
      kda: 'Yes',
      paper1: 'No',
      paper2: 'Yes',
      paper3: 'No',
      lastUpdate: '08-04-2021',
    },
    {
      plotAddress: 'X-124',
      ownerName: 'Ahmed',
      nagsha: 'Yes',
      kda: 'Yes',
      paper1: 'No',
      paper2: 'No',
      paper3: 'No',
      lastUpdate: '03-01-2021',
    },
    {
      plotAddress: 'X-125',
      ownerName: 'Ahmed',
      nagsha: 'Yes',
      kda: 'Yes',
      paper1: 'No',
      paper2: 'No',
      paper3: 'No',
      lastUpdate: '29-11-2020',
    },
  ];

  return (
    <div>
    <div className="min-h-screen w-full bg-white text-black">
    <div className="pt-10 text-4xl text-center">
        <h1 className="inline-block w-full border-b-1 border-black pb-2">Upload File</h1>
      </div>
    <div className="max-w-lg w-full justify-items-center p-8 shadow-lg rounded-lg bg-white">
      
  
      {/* File/Document Number */}
      <div className="mb-4 flex flex-auto items-center">
        <label htmlFor="fileno" className="block text-sm font-bold mr-4 w-40">File / Document Number</label>
        <input
          type="text"
          id="fileno"
          name="fileno"
          value={formData.fileno}
          onChange={handleInputChange}
          className="px-4 py-2 border-2 border-red-500 rounded-lg focus:outline-none focus:border-red-500"
          placeholder="Enter File Number"
        />
      </div>
  
      {/* Plot Address */}
      <div className="mb-4 flex items-center">
        <label htmlFor="plotAddress" className="block text-sm font-bold mr-4 w-40">Plot Address</label>
        <input
          type="text"
          id="plotAddress"
          name="plotAddress"
          value={formData.plotAddress}
          onChange={handleInputChange}
          className="px-4 py-2 border-2 border-red-500 rounded-lg focus:outline-none focus:border-red-500"
          placeholder="Enter Plot Address"
        />
      </div>
  
      {/* Owner Name */}
      <div className="mb-4 flex items-center">
        <label htmlFor="ownerName" className="block text-sm font-bold mr-4 w-40">Owner Name</label>
        <input
          type="text"
          id="ownerName"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleInputChange}
          className="px-4 py-2 border-2 border-red-500 rounded-lg focus:outline-none focus:border-red-500"
          placeholder="Enter Owner Name"
        />
      </div>
  
      {/* Document Type */}
      <div className="mb-4 flex items-center">
        <label htmlFor="documentType" className="block text-sm font-bold mr-4 w-40">Document Type</label>
        <select
          id="documentType"
          name="documentType"
          value={formData.documentType}
          onChange={handleInputChange}
          className="px-4 py-2 border-2 border-red-500 rounded-lg focus:outline-none focus:border-red-500"
        >
          <option value="">Select Document Type</option>
          <option value="saleDeed">Sale Deed</option>
          <option value="leaseDeed">Lease Deed</option>
          <option value="mortgageDeed">Mortgage Deed</option>
          <option value="titleDeed">Title Deed</option>
        </select>
      </div>
  
      {/* Upload Document */}
      <div className="mb-4 flex items-center">
        <label htmlFor="file" className="block text-sm font-bold mr-4 w-40">Upload Document</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
          className="px-4 py-2 border-2 w-55 border-red-500  rounded-lg focus:outline-none focus:border-red-500 "
        />
      </div>
  
      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="bg-white text-black hover:bg-red-500  py-2 px-4 rounded-lg  transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Submit
        </button>
      </div>
    </div>


      {/* Table Section at the Bottom */}
      <div className="flex-grow flex justify-center items-end pb-4 w-full">
        <table className="w-full border-collapse border border-white">
          <thead>
            <tr className="bg-white">
              <th className="border border-white p-2">Plot Address</th>
              <th className="border border-white p-2">Owner Name</th>
              <th className="border border-white p-2">Naqsha</th>
              <th className="border border-white p-2">KDA</th>
              <th className="border border-white p-2">Paper 1</th>
              <th className="border border-white p-2">Paper 2</th>
              <th className="border border-white p-2">Paper 3</th>
              <th className="border border-white p-2">Last Update</th>
              <th className="border border-white p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : ''}>
                <td className="border border-white p-2">{row.plotAddress}</td>
                <td className="border border-white p-2">{row.ownerName}</td>
                <td className="border border-white p-2">{row.nagsha}</td>
                <td className="border border-white p-2">{row.kda}</td>
                <td className="border border-white p-2">{row.paper1}</td>
                <td className="border border-white p-2">{row.paper2}</td>
                <td className="border border-white p-2">{row.paper3}</td>
                <td className="border border-white p-2">{row.lastUpdate}</td>
                <td className="border border-white p-2">
                  <button className="bg-white text-black px-2 py-1  rounded-md border border-red-500 hover:bg-red-500">View Property</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>
  </div>
     
  );
};

export default FileUploadPage;
