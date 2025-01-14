import React from 'react'
import { Table } from "rsuite";
import mockUsers from "../../assets/mocks/ProductMocks";

const { Column, HeaderCell, Cell } = Table;
const data = mockUsers(20);

function DashbourdTable() {
  return (
    <div>
    <Table
      height={550}
      data={data}
      onRowClick={(rowData) => {
        console.log(rowData);
      }}
      style={{ width: "100%" }}
    >
      <Column flexGrow={2} align="center">
        <HeaderCell className="bg-gray-200 text-gray-700">Code</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column flexGrow={3}>
        <HeaderCell className="bg-gray-200 text-gray-700">
          Custormer Name
        </HeaderCell>
        <Cell dataKey="firstName" />
      </Column>

      <Column flexGrow={3}>
        <HeaderCell className="bg-gray-200 text-gray-700">
          Supplier Name
        </HeaderCell>
        <Cell dataKey="lastName" />
      </Column> 
      <Column flexGrow={2}>
        <HeaderCell className="bg-gray-200 text-gray-700">Price</HeaderCell>
        <Cell dataKey="age" />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>Action</HeaderCell>
        <Cell>
          {(rowData) => (
            <>
              <span
                className="material-symbols-outlined sidebar-icon text-lg font-medium text-txtdarkblue mr-3 cursor-pointer"
                onClick={() => handleEditItem(rowData)}
              >
                edit
              </span>
              <span
                className="material-symbols-outlined sidebar-icon text-lg font-medium text-red mr-3 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteOpen(rowData.id);
                }}
              >
                delete
              </span>
            </>
          )}
        </Cell>
      </Column>
    </Table>
  </div>
  )
}

export default DashbourdTable
