import React from "react";
import { useGetAllItemsQuery } from "../../store/api/itemApi";

function DashboardTable() {
  // Fetch data using the `useGetAllItemsQuery` hook
  const { data: items, isLoading, isError, error } = useGetAllItemsQuery();
  const getAllitems = items?.items || [];

  console.log("data",getAllitems)


  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error?.data?.message || "Something went wrong"}</p>;
  }

  return (
    <div className="overflow-x-auto overflow-y-auto max-h-[700px] bg-gray-50 p-2 rounded-lg mt-2">
      {getAllitems?.map((item) => (
        <div
          key={item.id}
          className="bg-transparent border border-gray-300 rounded-lg mb-2 shadow-sm"
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
                <p className="text-green-600 font-bold">: Rs {item.sellingPrice}/=</p>
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
      <div className="h-20"></div>
    </div>
  );
}

export default DashboardTable;
