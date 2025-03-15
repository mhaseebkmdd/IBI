import React from "react";
import Navbar from "./navbar";

const FirConfirm = () => {        

    return (
<div>
    <Navbar/>   
      <div className="text-left mb-4">
        <h1 className="text-3xl text-black">Print Tranfer User Record</h1>
      </div>

      <div>
<p>From</p>
 {/* Flex container for the forms */}
 <div className="flex justify-between space-y-2 ">
        {/* Form 1 */}
        <form  className="pl-20  sm:w-1/3 p-4 space-y-2">
          <h5>Add Picture</h5>
          <input
            placeholder="Image"
            type="file"
            className="w-37 h-35 py-2 border-1 border-black-100 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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
        <form className=" sm:w-1/3  p-4 space-y-2">
          <h5>CNIC Picture</h5>
          <input
            placeholder="Image"
            type="file"
            className="w-70 h-35 py-2 border-1 border-black-100 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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

        {/* Form 3 */}
        <form  className=" sm:w-1/3 p-4 space-y-2">
          <h5>Thumb</h5>
          <input
            placeholder="Image"
            type="file"
            className="w-37 h-35 py-2 border-1 border-black-100 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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
      </div>


      </div>
    )};
export default FirConfirm; 