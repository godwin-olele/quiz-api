import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "Name", headerName: "Name", width: 200 },
  { field: "status", headerName: "Status", width: 200 },
  {
    field: "action",
    headerName: "Action",
    type: "string",
    width: 90,
  },
  {
    /*
{
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  }, */
  },
];

const rows = [
  { id: 1, status: "Staff", Name: "Jon", action: "Remove" },
  { id: 2, status: "User", Name: "Cersei", action: "Add" },
  { id: 3, status: "Staff", Name: "Jaime", action: "Remove" },
  { id: 4, status: "User", Name: "Arya", action: "Add" },
  { id: 5, status: "User", Name: "Daenerys", action: "Add" },
  { id: 6, status: "Staff", Name: null, action: "Remove" },
  { id: 7, status: "User", Name: "Ferrara", action: "Add" },
  { id: 8, status: "User", Name: "Rossini", action: "Remove" },
  { id: 9, status: "Staff", Name: "Harvey", action: "Add" },
];

{
  /*checkboxSelection */
}

export default function DataTable() {
  return (
    <div className="w-full h-auto py-[3rem] px-[1rem] flex justify-center">
      <div className="w-[700px] h-auto">
        <h1 className="text-[#000000] text-[1.7rem] font-medium">
          User Administration
        </h1>
        <div className="w-full h-[400px] mt-[2rem] bg-[#ffffff]">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </div>
  );
}
