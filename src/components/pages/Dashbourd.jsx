import React from "react";
import DashbourdCard from "../cards/DashbourdCard";
import DashbourdTable from "../tables/DashbourdTable";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashbourd() {
  const categories = ["Orange", "China", "Single Men"]; 

  return (
    <div className="px-6 py-6 bg-[#f3f9ff] h-screen ">
      <div className="text-xl font-semibold mb-4">Items Price List</div>
      <div className="">
        <div className="flex flex-col">
          <input
            type="search"
            className="form-control mb-2 rsuite w-full"
            placeholder="Search items"
          />
          <select
            className="form-control mb-2"
            defaultValue="" 
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary w-full">+ Add New Item</button>
      </div>
      <div>
        <DashbourdTable />
      </div>
    </div>
  );
}

export default Dashbourd;
