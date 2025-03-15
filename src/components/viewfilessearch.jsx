import React, { useState } from 'react';



const SearchFilePage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [textInput3, setTextInput3] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTextInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleSearch = (inputValue) => {
    alert(`Searching for: ${inputValue}`);
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
    <div className="min-h-screen flex flex-col bg-white">
      {/* Centered Heading */}
      <div className="text-center mb-4">
        <h1 className="text-3xl text-black w-full border-b-2 border-black">Search File</h1>
      </div>

 

      {/* Search Inputs Section */}
      <div className="absolute left-2 mt-20 space-y-4">
        {/* Dropdown */}
        <div className="flex items-center space-x-2">
          <select
            value={selectedOption}
            onChange={handleDropdownChange}
            className="border border-red-500 px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Plot Type</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button
            onClick={() => handleSearch(selectedOption)}
            className="px-4 py-2 bg-white-500 text-black rounded-md border border-red-500 hover:bg-red-500"
          >
            Search
          </button>
        </div>
                          
        {/* Text Area 1 */}
        <div className="flex items-center space-x-2">
          <input
            placeholder="Plot Number"
            value={textInput1}
            onChange={(e) => handleTextInputChange(e, setTextInput1)}
            className="border border-red-500 px-2 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            onClick={() => handleSearch(textInput1)}
            className="px-4 py-2 bg-white text-black rounded-md border border-red-500 hover:bg-red-500"
          >
            Search
          </button>
        </div>

        {/* Text Area 2 */}
        <div className="flex items-center space-x-2">
          <input
            placeholder="CNIC"
            value={textInput2}
            onChange={(e) => handleTextInputChange(e, setTextInput2)}
            className="border border-red-500 px-2 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            onClick={() => handleSearch(textInput2)}
            className="px-4 py-2 bg-white text-black rounded-md border border-red-500 hover:bg-red-500"
          >
            Search
          </button>
        </div>

        {/* Text Area 3 */}
        <div className="flex items-center space-x-2">
          <input
            placeholder="File Number"
            value={textInput3}
            onChange={(e) => handleTextInputChange(e, setTextInput3)}
            className="border border-red-500 px-2 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            onClick={() => handleSearch(textInput3)}
            className="px-4 py-2 bg-white text-black rounded-md border border-red-500 hover:bg-red-500"
          >
            Search
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

export default SearchFilePage;
