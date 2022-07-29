import React, { useState, useEffect, useMemo } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useStoreActions, useStoreState } from "easy-peasy"

// {
//   field: "actions",
//   headerName: "Actions",
//   type: "actions",
//   width: 150,
//   renderCell: (params) => <RenderActions params={params} />,
// },

const RenderActions = ({ params }) =>
  params.row.is_verified ? <h1>unverify</h1> : <h3>verify</h3>

export default function Questions() {
  // let isLoading = useStoreState(({ Statistics }) => Statistics.loading)
  let id = useStoreState(({ User }) => User.user.id)
  let questions = useStoreState(({ User }) => User.questions)
  const [loading, setLoading] = useState(true)

  const fetchUserQuestions = useStoreActions(
    ({ User }) => User.fetchUserQuestions
  )

  const fetchData = async () => {
    setLoading(true)
    await fetchUserQuestions(id)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [pageSize, setPageSize] = useState(5)

  console.log(questions)

  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        width: 50,
        renderCell: (params) => params.row.id,
      },
      {
        field: "category",
        headerName: "category",
        width: 200,
        renderCell: (params) => params.row.category,
      },
      {
        field: "type",
        headerName: "Type",
        width: 200,
        renderCell: (params) => params.row.type,
      },
      {
        field: "question",
        headerName: "Question",
        width: 200,
        renderCell: (params) => params.row.question,
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

  // if (loading) return <h1>Loading...</h1>
  return (
    <div className='w-full h-auto py-[3rem] px-[1rem] flex justify-center'>
      <div className='w-[800px] h-auto'>
        <h1 className='text-[#000000] text-[1.7rem] font-medium'>Questions</h1>
        <div className='w-full h-[400px] mt-[2rem] bg-[#ffffff]'>
          <DataGrid
            rows={questions}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5]}
            getRowHeight={() => "auto"}
            getEstimatedRowHeight={() => 200}
            loading={loading}
          />
        </div>
      </div>
    </div>
  )
}
