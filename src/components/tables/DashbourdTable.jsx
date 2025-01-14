import React from 'react';

function DashboardTable() {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full mt-8 border border-gray-300">
        <thead className=''>
          <tr className="bg-gray-100 text-sm sm:text-base">
            <th className="border border-gray-300 px-2 py-2 text-left w-2/3">Name</th>
            <th className="border border-gray-300 px-2 py-2 text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm sm:text-base">
            <td className="border border-gray-300 px-2 py-2">Item One</td>
            <td className="border border-gray-300 px-2 py-2">$10.00</td>
          </tr>
          <tr className="bg-gray-50 text-sm sm:text-base">
            <td className="border border-gray-300 px-2 py-2"></td>
            <td className="border border-gray-300 px-2 py-2">$15.00</td>
          </tr>
          <tr className="text-sm sm:text-base">
            <td className="border border-gray-300 px-2 py-2">Item Three</td>
            <td className="border border-gray-300 px-2 py-2">$20.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DashboardTable;