import React, { useEffect, usestate } from "react"
import CirularProgress from "@mui/material/CircularProgress"
import { useNavigate, useSearchParams } from "react-router-dom"
import { verifyEmailWithToken } from "../../../core/api"

const VerifyEmail = () => {
  const navigate = useNavigate()
  const [query] = useSearchParams()

  useEffect(() => {
    verify()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const verify = () => {
    const token = query.get("token")

    if (!token) return navigate("/")

    // do verify
    // setTimeout(() => navigate("/"), 500)

    verifyEmailWithToken(token)
      .then(({ data: res }) => {
        const { status, message, data } = res
        // if (status == "success") {
        // }
        console.log(res)

        if (status == "success") navigate("/Login")

        // setTimeout(next, 5000)
      })
      .catch(({ response: { data: res } }) => {
        const { status, message } = res

        console.log(res)
        navigate("/Signup")
      })
  }

  return (
    <div className='h-[100vh] flex justify-center items-center'>
      <CirularProgress style={{ color: "orange" }} />
    </div>
  )
}

export default VerifyEmail
