import React from "react";
import DashbourdCard from "../cards/DashbourdCard";
import DashbourdTable from "../tables/DashbourdTable";

function Dashbourd() {
  return (
    <div className="px-28 py-6">
      <div className="text-4xl font-semibold">Items Price List</div>
      <div>
        <DashbourdCard />
      </div>
      <div>
        <div></div>
        <DashbourdTable/> 
      </div>
    </div>
  );
}

export default Dashbourd;
