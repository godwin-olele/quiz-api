import React, { useEffect, usestate } from "react"
import CirularProgress from "@mui/material/CircularProgress"
import { useNavigate, useSearchParams } from "react-router-dom"

const VerifyEmail = () => {
  const navigate = useNavigate()
  const [query] = useSearchParams()
  const token = query.get("token")

  useEffect(() => {
    if (!token) navigate("/")

    // do verify
    setTimeout(() => navigate("/"), 500)
  }, [token])

  return (
    <div className='flex justify-center items-center'>
      <CirularProgress />
    </div>
  )
}

export default VerifyEmail
