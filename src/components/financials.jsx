import React from 'react';

function Financials() {
  return (
    <div>
    <div className="p-8 bg-white min-h-screen">
    {/* Header */}
    <h1 className="text-3xl mb-4 flex justify-center  border-b-2 border-black pb-4">View Financials</h1>
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Plot # X-123</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Financials</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Payment Type</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">Digitization</td>
              <td className="py-2 px-4 border-b">1000</td>
              <td className="py-2 px-4 border-b text-green-600">Success</td>
              <td className="py-2 px-4 border-b text-blue-600">View</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">Additional Helt</td>
              <td className="py-2 px-4 border-b">1000</td>
              <td className="py-2 px-4 border-b text-green-600">Success</td>
              <td className="py-2 px-4 border-b text-blue-600">View</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">3</td>
              <td className="py-2 px-4 border-b">Transfer Property</td>
              <td className="py-2 px-4 border-b">5000</td>
              <td className="py-2 px-4 border-b text-yellow-600">Passage</td>
              <td className="py-2 px-4 border-b text-blue-600">Add Payment</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Financials;