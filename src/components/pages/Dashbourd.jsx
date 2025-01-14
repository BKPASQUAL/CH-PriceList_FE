// Dashbourd.js
import React from "react";
import DashbourdTable from "../tables/DashbourdTable";
import "bootstrap/dist/css/bootstrap.min.css";
import AddItemsModel from "../models/AddItemsModel";

function Dashbourd() {
  const categories = ["Orange", "China", "Single Men"];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="px-6 py-6 bg-[#f3f9ff] h-screen fixed w-full">
      <div className="text-2xl font-bold mb-4">Items Price List</div>
      <div className="">
        <div className="flex flex-col">
          <input
            type="search"
            className="form-control mb-2 rsuite w-full"
            placeholder="Search items"
          />
          <select className="form-control mb-2" defaultValue="">
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary w-full" onClick={handleOpen}>
          + Add New Item
        </button>
      </div>
      <div>
        <DashbourdTable />
      </div>
      <AddItemsModel open={open} handleClose={handleClose} />
    </div>
  );
}

export default Dashbourd;
