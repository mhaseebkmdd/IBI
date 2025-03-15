import React,{useState} from "react";
import { Link, useNavigate  } from "react-router-dom"; // Import useNavigate

const FirAcess = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  const handleNextPage = () => {
    navigate('/dashboard/firverify'); // Navigate to the next page (change this to your desired route)
  };

 const [file, setFile] = useState("");
 const handleOnChange = (e) => {
   setFile(e.target.value);
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
      <div className="flex items-center space-x-4">
  <h3 className="text-lg font-medium">Add Record</h3>
  </div>
  <div className="flex items-center space-x-4">
  <div className="flex items-center space-x-2">
    <label className="text-black mb-0">Add Files</label>
    <input
      type="text"
      value={file}
      onChange={handleOnChange}
      className="p-2 border-2 border-red-500 rounded"
    />
  </div>
  </div>
  <br />
  <div className="flex items-center space-x-2">
  <label className="text-black mb-0">Select Project</label>
  <select className="p-2 border-2 border-red-500 rounded" required>
  <option value="">Choose Project</option>
  <option value="Kazimabad">Kazimabad</option>
  <option value="other">Other</option>
</select>

  </div>




        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={handleNextPage} // Add the onClick handler here
            className= "  bg-red-500 text-black hover:bg-red-500 p-6 py-2 px-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Next
          </button>
        </div>
      </div>

  );
};

export default FirAcess;
