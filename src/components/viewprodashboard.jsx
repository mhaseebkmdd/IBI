import React from 'react';

const ViewProDashboard = () => {
  return (
    <div>

    <div className="bg-white text-black min-h-screen flex flex-col px-4">
      {/* Main Heading */}
      <div className="pt-10 text-4xl text-center">
        <h1 className="inline-block w-full border-b-1 border-black pb-2">View Property</h1>
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
              <button className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/qr-1784021-1519744.png?f=webp&w=256" alt="Action 1" className="mb-2" />
                Generate QR
              </button>
              <button className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-right-arrow-icon-download-in-svg-png-gif-file-formats--forward-typicons-line-pack-miscellaneous-icons-457505.png?f=webp&w=256" alt="Action 2" className="mb-2" />
                Transfer Property
              </button>
              <button className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/family-1704109-1447129.png?f=webp&w=256" alt="Action 3" className="mb-2" />
                Add legal Heir
              </button>
              <button className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/upload-11354536-9306364.png?f=webp&w=256" alt="Action 4" className="mb-2" />
                Upload Files
              </button>
              <button className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/document-view-3098776-2578238.png?f=webp&w=256" alt="Action 5" className="mb-2" />
                View Upload Files
              </button>
              <button className="p-4 flex flex-col items-center bg-white rounded-lg hover:bg-red-500 transition-colors w-20">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/business-bag-2886106-2396358.png?f=webp&w=256" alt="Action 6" className="mb-2" />
                Financials
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: History Column */}
        <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold">History</h2>
            <div className="mt-4">
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ratione. Voluptate molestiae nisi maxime earum quaerat, libero quas recusandae nam harum voluptatum ullam sapiente impedit dignissimos rerum quod, in eum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolorem sunt accusamus temporibus alias iste sit quo, harum assumenda nesciunt officiis illum omnis numquam consequuntur enim, blanditiis atque voluptatibus autem?
              
              </p>
              {/* Add your history items here */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewProDashboard;
