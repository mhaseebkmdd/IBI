import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

// Importing the other components
import FirAcess from './firacess';
import TransferedProperty from './transferedproperty';
import SignupForm from './signup';
import FileUploadPage from './uploadfile';
import SearchFilePage from './viewfilessearch';
import Financials from './financials';
import Homes from './homes';
import Commericals from './commericals';
import HomeTransfered from './hometransfered';
import HomesRented from './homerented';

const Dashboard = () => {
  // Mock data for history
  const historyData = [
    {
      id: 1,
      title: 'Created a new record',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ratione. Voluptate molestiae nisi.',
      date: '2025-03-01'
    },
    {
      id: 2,
      title: 'Transferred a property',
      description: 'Voluptate molestiae nisi maxime earum quaerat, libero quas recusandae nam harum.',
      date: '2025-03-02'
    },
    {
      id: 3,
      title: 'Uploaded new files',
      description: 'Impedit dignissimos rerum quod, in eum? Lorem ipsum dolor sit amet consectetur.',
      date: '2025-03-03'
    },
    {
      id: 4,
      title: 'Added a new user',
      description: 'Recusandae nam harum voluptatum ullam sapiente impedit dignissimos rerum.',
      date: '2025-03-04'
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col px-4">
      {/* Main Heading */}
      <div className="pt-10 text-4xl font-bold text-center">
        <h1 className="inline-block w-full border-b-1 border-black pb-2">What do you want to do today?</h1>
      </div>

      {/* Flex container for layout */}
      <div className="flex flex-col lg:flex-row mt-8">
        {/* Left Side: Actions and Stats */}
        <div className="lg:w-2/3 w-full pr-4">
          {/* Action Section */}
          <div className="text-xl font-semibold">
            <h2>Action</h2>
          </div>

          <div className="inline-block w-full border-1 border-black pb-2">
            {/* Action Buttons Section with responsive grid and spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
              {/* Action Buttons with little images */}
              <Link to="/dashboard/firacess" className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/business-man-2046637-1726296.png?f=webp&w=256" alt="Action 1" className="mb-2" />
                Create Record
              </Link>
              <Link to="/dashboard/transferedproperty" className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/document-view-3098926-2578338.png?f=webp&w=256" alt="Action 2" className="mb-2" />
                View Record
              </Link>
              <Link to="/dashboard/signup" className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/add-user-1810618-1539092.png?f=webp&w=256" alt="Action 3" className="mb-2" />
                Add Users
              </Link>
              <Link to="/dashboard/uploadfile" className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/upload-11354536-9306364.png?f=webp&w=256" alt="Action 4" className="mb-2" />
                Upload Files
              </Link>
              <Link to="/dashboard/viewfilessearch" className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/document-view-3098776-2578238.png?f=webp&w=256" alt="Action 5" className="mb-2" />
                View Files
              </Link>
              <Link to="/dashboard/financials" className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/business-bag-2886106-2396358.png?f=webp&w=256" alt="Action 6" className="mb-2" />
                Financials
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-10 text-xl font-semibold">
            <h2>Stats</h2>
          </div>
          <div className="inline-block border-1 w-full border-black pb-2">
            {/* Stats Buttons Section with responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
              {/* Stats Buttons */}
              <Link to="/dashboard/homes" className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-home-icon-download-in-svg-png-gif-file-formats--house-building-casa-font-awesome-pack-user-interface-icons-46266.png?f=webp&w=256" alt="Stats 1" className="mb-2" />
                Homes
              </Link>
              <Link to="/dashboard/commericals" className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/building-1593489-1354728.png?f=webp&w=256" alt="Stats 2" className="mb-2" />
                Commercial
              </Link>
              <Link to="/dashboard/hometransfered" className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/hammer-439-595744.png?f=webp&w=256" alt="Stats 3" className="mb-2" />
                Homes Transferred
              </Link>
              <Link to="/dashboard/homerented" className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/dustbin-51-244121.png?f=webp&w=256" alt="Stats 4" className="mb-2" />
                Homes Rented
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: History Column */}
        <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold">History</h2>
            <div className="mt-4">
              {/* Map through the history data and display it */}
              {historyData.map((item) => (
                <div key={item.id} className="mb-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="text-gray-500">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
