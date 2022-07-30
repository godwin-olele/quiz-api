import React, { useState, useEffect, useMemo } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useStoreActions, useStoreState } from "easy-peasy"
import Chip from "@mui/material/Chip"

// {
//   field: "actions",
//   headerName: "Actions",
//   type: "actions",
//   width: 150,
//   renderCell: (params) => <RenderActions params={params} />,
// },

// const RenderActions = ({ params }) =>
//   params.row.is_verified ? <h1>unverify</h1> : <h3>verify</h3>

const RenderActions = ({ params, verify, unverify }) =>
  params.row.is_verified ? (
    <Chip
      label='unverify'
      size='small'
      onClick={unverify}
      sx={{ width: "70px", color: "#D82525", backgroundColor: "#fafafa" }}
    />
  ) : (
    <Chip
      label='verify'
      size='small'
      onClick={verify}
      sx={{ width: "70px", color: "#25D842", backgroundColor: "#fafafa" }}
    />
  )

export default function Questions() {
  // let isLoading = useStoreState(({ Statistics }) => Statistics.loading)
  let questions = useStoreState(({ Statistics }) => Statistics.questions)
  const [loading, setLoading] = useState(true)

  const fetchAllQuestions = useStoreActions(
    ({ Statistics }) => Statistics.fetchAllQuestions
  )

  const { verifyQuestion, unverifyQuestion } = useStoreActions(
    ({ Statistics: { verifyQuestion, unverifyQuestion } }) => ({
      verifyQuestion,
      unverifyQuestion,
    })
  )

  const fetchData = async () => {
    setLoading(true)
    const data = await fetchAllQuestions()
    if (data) setLoading(false)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [pageSize, setPageSize] = useState(5)

  const verify = async (id) => {
    setLoading(true)
    const m = await verifyQuestion(id)
    if (m) fetchData()
  }

  const unverify = async (id) => {
    setLoading(true)
    const m = await unverifyQuestion(id)
    if (m) fetchData()
  }

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
        renderCell: (params) => (
          <RenderActions
            params={params}
            verify={() => verify(params.row.id)}
            unverify={() => unverify(params.row.id)}
          />
        ),
      },
    ],
    []
  )

  return (
    <div className='w-full h-auto py-[3rem] px-[1rem] flex justify-center'>
      <div className='w-full'>
        <h1 className='text-[#000000] text-[1.7rem] font-medium'>Questions</h1>
        <div className='w-full h-[400px] mt-[2rem] bg-[#ffffff]'>
          <DataGrid
            rows={questions}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            loading={loading}
            rowsPerPageOptions={[5]}
            getRowHeight={() => "auto"}
            density='compact'
          />
        </div>
      </div>
    </div>
  )
}
