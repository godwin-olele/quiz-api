import React, { useState, useEffect, useMemo } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useStoreActions, useStoreState } from "easy-peasy"

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

const RenderActions = ({ params }) =>
  params.row.is_staff ? (
    <h1 className='text-red'>Remove</h1>
  ) : (
    <h3 className='text-green-300'>add</h3>
  )

export default function DataTable() {
  let users = useStoreState(({ Statistics }) => Statistics.users)
  const [loading, setLoading] = useState(true)

  const fetchAllUsers = useStoreActions(
    ({ Statistics }) => Statistics.fetchAllUsers
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
        renderCell: (params) => (params.row.is_staff ? "Staff" : "User"),
      },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 150,
        renderCell: (params) => <RenderActions params={params} />,
      },
    ],
    []
  )

  return (
    <div className='w-full h-auto py-[3rem] px-[1rem] flex justify-center'>
      <div className='w-[700px] h-auto'>
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
