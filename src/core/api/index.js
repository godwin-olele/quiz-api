import { API_URL } from "../../constants"
const axios = require("axios")
// working on it.
export const isLoggedIn = () => localStorage.getItem("token")
export const isVerified = () => localStorage.getItem("isVerified")

// initialize auth
const init = () => {
  const instance = axios.create({
    /// fallback to development url when production is not found
    baseURL: process.env.REACT_APP_API_URL || API_URL,
  })

  if (isLoggedIn()) {
    const token = localStorage.getItem("token")
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`
  }

  return instance
}

export const fetch = init()

// just for test
export const getAllUsers = async (data) => {
  const response = await fetch.get(`/users`)

  console.log(response)
  return response
}

// user routes
// api /api/users
export const signupUser = async (credentials) => {
  // dont worry about it
  // bcuz validation is already done
  const response = await fetch.post(`/auth/register`, credentials)

  // {
  //   "status": "success",
  //   "message": "An email activation link has been to your email address",
  //   "data": {
  //     "username": "dave",
  //     "email": "dave@gmail.com"
  //   }
  // }

  if (response.status === 201) {
    // const user = response.data
    const { data } = response.data

    // localStorage.setItem("isVerified", false)
    localStorage.setItem("partialUser", JSON.stringify(data))

    return response
  }
}

// still working on it
export const updateUser = async (credentials) => {
  // dont worry about it
  // bcuz validation is already done
  const response = await fetch.patch(`auth/user-profile`, credentials)

  // {
  //   "status": "success",
  //   "message": "Profile Updated Successfully",
  //   "data": {
  //     "id": 8,
  //     "username": "newdave",
  //     "first_name": "",
  //     "last_name": "",
  //     "bio": "",
  //     "avatar": "/media/avatar.jpg"
  //   }
  // }
  if (response.status === 200) {
    const { data } = response.data

    // localStorage.setItem("userDetails", JSON.stringify(data))

    return response
  }
  return response
}

export const loginUser = async (credentials) => {
  // dont worry about it
  // bcuz validation is already done
  const response = await fetch.post(`/users/login`, credentials)

  if (response.status === 200) {
    const user = response.data
    const { token } = response.data

    localStorage.setItem("token", token)
    localStorage.setItem("userDetails", JSON.stringify(user))

    return response
  }

  return response
}

// auth route (user has ot be authenticated first before using this functions)
export const getUserDetails = async () => {
  // dont worry about it
  // bcuz validation is already done
  const response = await fetch.get(`/auth/user-profile`)

  // what u should espect
  //   {
  //     "status": "success",
  //     "message": "Authenticated User Profile",
  //     "data": {
  //       "id": 8,
  //       "username": "dave",
  //       "first_name": "",
  //       "last_name": "",
  //       "bio": "",
  //       "avatar": "/media/avatar.jpg"
  //     }
  //   }

  if (response.status === 200) {
    const { data } = response.data

    // to watch any change from any where
    localStorage.setItem("userDetails", JSON.stringify(data))

    return response
  }
}

export const logoutCurrentUser = async () => {
  // dont worry about it
  // bcuz validation is already done
  const response = await fetch.post(`/users/logout`)

  if (response.status === 200) {
    localStorage.removeItem("token")
    localStorage.removeItem("userDetails")

    return response
  }
  return response
}

export const logoutAllUsersExceptYou = async () => {
  // dont worry about it
  // bcuz validation is already done
  const response = await fetch.post(`/users/logout?all=true`)

  if (response.status === 200) {
    return response
  }

  return response
}

// appointment routes
// /api/appointments/
export const getAppointmentById = async (id) => {
  const response = await fetch.get(`/appointments/${id}`)

  return response
}

export const getAllUserAppointments = async () => {
  // dont worry about it
  // bcuz validation is already done
  const response = await fetch.get(`/appointments`)

  if (response.status === 200) {
    return response
  }

  return response
}

export const createAnAppointment = async (body) => {
  // dont worry about it
  // bcuz validation is already done
  const response = await fetch.post(`/appointments/create`, body)

  if (response.status === 201) {
    return response
  }

  return response
}

export const finnishAppointmentById = async (id) => {
  // dont worry about it
  // bcuz validation is already done
  const response = await fetch.get(`/appointments/${id}/finish`)

  if (response.status === 200) {
    return response
  }

  return response
}

export const cancelAppointmentById = async (id) => {
  // dont worry about it
  // bcuz validation is already done
  const response = await fetch.get(`/appointments/${id}/cancel`)

  if (response.status === 200) {
    return response
  }

  return response
}
