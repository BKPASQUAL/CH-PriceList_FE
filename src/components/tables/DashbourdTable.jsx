import React from "react";

const mockData = [
  {
    id: 1,
    itemCode: "OR1002",
    itemName: "Orange One Gan",
    price: "Rs 1200.00/=",
  },
  {
    id: 2,
    itemCode: "AP2001",
    itemName: "Apple Fresh",
    price: "Rs 1500.00/=",
  },
  {
    id: 3,
    itemCode: "BN3003",
    itemName: "Banana Delight",
    price: "Rs 800.00/=",
  },
  {
    id: 3,
    itemCode: "BN3003",
    itemName: "Banana Delight",
    price: "Rs 800.00/=",
  },
  {
    id: 3,
    itemCode: "BN3003",
    itemName: "Banana Delight",
    price: "Rs 800.00/=",
  },
];

function DashboardTable() {
  return (
    <div className="overflow-x-auto overflow-y-auto max-h-[700px] bg-gray-50 p-2 rounded-lg mt-4">
      {mockData.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-300 rounded-lg mb-4 shadow-sm"
        >
          <div className="p-2 border-b border-gray-200">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <h1 className="w-1/3 text-gray-600 font-semibold">Item Code</h1>
                <p className="text-gray-800">: {item.itemCode}</p>
              </div>
              <div className="flex items-center mb-2">
                <h1 className="w-1/3 text-gray-600 font-semibold">Item Name</h1>
                <p className="text-gray-800">: {item.itemName}</p>
              </div>
              <div className="flex items-center mb-2">
                <h1 className="w-1/3 text-gray-600 font-semibold">Price</h1>
                <p className="text-green-600 font-bold">: {item.price}</p>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                <span className="material-symbols-outlined">edit_square</span> Edit
              </button>
              <button className="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium">
                <span className="material-symbols-outlined">delete</span> Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardTable;
