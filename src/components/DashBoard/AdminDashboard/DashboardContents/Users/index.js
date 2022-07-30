import React, { useState, useEffect, useMemo } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useStoreActions, useStoreState } from "easy-peasy"
import Chip from "@mui/material/Chip"

const _columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "username", headerName: "Username", width: 300 },
  { field: "status", headerName: "Status", width: 200 },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 150,
    renderCell: (params) => <RenderActions params={params} />,
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
]

const RenderActions = ({ params, add, remove }) =>
  params.row.is_staff ? (
    <Chip
      label='remove'
      size='small'
      onClick={remove}
      sx={{ width: "70px", color: "#D82525", backgroundColor: "#fafafa" }}
    />
  ) : (
    <Chip
      label='add'
      size='small'
      onClick={add}
      sx={{ width: "70px", color: "#25D842", backgroundColor: "#fafafa" }}
    />
  )

const RenderStaff = ({ params }) =>
  params.row.is_staff ? (
    <Chip
      label='Staff'
      size='small'
      sx={{ width: "80px", color: "#F38704", backgroundColor: "#FAEFE2" }}
    />
  ) : (
    <Chip
      label='User'
      size='small'
      sx={{ width: "80px", color: "#331D02", backgroundColor: "#E3E3E3" }}
    />
  )

export default function DataTable() {
  let users = useStoreState(({ Statistics }) => Statistics.users)
  const [loading, setLoading] = useState(true)

  const fetchAllUsers = useStoreActions(
    ({ Statistics }) => Statistics.fetchAllUsers
  )

  const { addUserStaff, removeUserStaff } = useStoreActions(
    ({ Statistics: { addUserStaff, removeUserStaff } }) => ({
      addUserStaff,
      removeUserStaff,
    })
  )

  const fetchData = async () => {
    setLoading(true)
    const data = await fetchAllUsers()
    if (data) setLoading(false)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addStaff = async (id) => {
    setLoading(true)
    const m = await addUserStaff(id)
    if (m) fetchData()
  }

  const removeStaff = async (id) => {
    setLoading(true)
    const m = await removeUserStaff(id)
    if (m) fetchData()
  }

  const [pageSize, setPageSize] = useState(5)

  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        width: 50,
        renderCell: (params) => params.row.id,
      },
      {
        field: "username",
        headerName: "Name",
        width: 200,
        renderCell: (params) => params.row.username,
      },
      {
        field: "status",
        headerName: "Status",
        type: "string",
        width: 150,
        renderCell: (params) => <RenderStaff params={params} />,
      },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 150,
        renderCell: (params) => (
          <RenderActions
            params={params}
            add={() => addStaff(params.row.id)}
            remove={() => removeStaff(params.row.id)}
          />
        ),
      },
    ],
    []
  )

  return (
    <div className='w-full h-auto py-[3rem] px-[1rem] flex justify-center'>
      <div className='w-full'>
        <h1 className='text-[#000000] text-[1.7rem] font-medium'>
          User Administration
        </h1>
        <div className='w-full h-[400px] mt-[2rem] bg-[#ffffff]'>
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5]}
            // getRowHeight={() => "auto"}
            density='compact'
            loading={loading}
          />
        </div>
      </div>
    </div>
  )
}
