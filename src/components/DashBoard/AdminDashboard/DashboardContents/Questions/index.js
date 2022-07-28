import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "Category", headerName: "Category", width: 200 },
  { field: "type", headerName: "Type", width: 200 },
  {
    field: "action",
    headerName: "Action",
    type: "string",
    width: 200,
  },

  {
    field: "question",
    headerName: "Question",
    type: "string",
    width: 200,
  },
];

const rows = [
  { id: 1, type: "MCQ", Category: "Entertainment", question: "Who Sang Zazu?", action: "Remove" },
  { id: 2, type: "True/False", Category: "Games", question: "Pes > Fifa", action: "Remove" },
  {
    id: 3,
    type: "MCQ",
    Category: "Jaime",
    question: "Who dey for 5Naira note?",
    action: "Remove",
  },
  { id: 4, type: "User", Category: "Science", question: "Can’t think of One now", action: "Remove" },
  {
    id: 5,
    type: "Normal",
    Category: "Entertainment",
    question: "Add",
    action: "Remove",
  },
  { id: 6,  type: "MCQ", Category: "General Studies", question: "I don tire", action: "Remove" },
  { id: 7,  type: "MCQ", Category: "JavaScript", question: "Wahala be like bicycle", action: "Remove" },
  {
    id: 8,
    type: "MCQ",
    Category: "Entertainment",
    question: "Game on",
    action: "Remove",
  },
  { id: 9,  type: "MCQ", Category: "Physics", question: "Shay John don add functions?", action: "Remove" },
];

{
  /*checkboxSelection */
}

export default function Questions() {
  return (
    <div className="w-full h-auto py-[3rem] px-[1rem] flex justify-center">
      <div className="w-[800px] h-auto">
        <h1 className="text-[#000000] text-[1.7rem] font-medium">
          Question Administration
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
