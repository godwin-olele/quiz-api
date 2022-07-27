import { API_URL } from "../../constants"
const axios = require("axios")
// working on it.
export const isLoggedIn = () => localStorage.getItem("accessToken")
// export const isVerified = () => localStorage.getItem("isVerified")

// initialize auth
const init = () => {
  const instance = axios.create({
    /// fallback to development url when production is not found
    baseURL: process.env.REACT_APP_API_URL || API_URL,
  })

  if (isLoggedIn()) {
    const token = localStorage.getItem("accessToken")
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`
  }

  return instance
}

export const fetch = init()

// user routes
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

  // if (response.status === 201) {
  // const user = response.data
  // const { data } = response.data

  // localStorage.setItem("isVerified", false)
  // localStorage.setItem("userDetails", JSON.stringify(data))

  //   return response
  // }

  return response
}

export const loginUser = async (credentials) => {
  // dont worry about it
  // bcuz validation is already done
  const response = await fetch.post(`/auth/login`, credentials)

  if (response.status === 200) {
    const { status, data } = response.data

    if (status == "success") {
      const { access, refresh } = data

      localStorage.setItem("refreshToken", refresh)
      localStorage.setItem("accessToken", access)
    }

    return response
  }

  return response
}

// /auth/email-verify?token=<string
/**
 *
 * @param {string} token is the user's token
 * @returns {Promise} - the incoming response
 */
export const verifyEmailWithToken = async (token) => {
  // dont worry about it
  // bcuz validation is already done
  const response = await fetch.get(`/auth/email-verify?token=${token}`)

  // {
  //   "status": "success",
  //   "message": "Account has been verified successfully",
  //   "data": []
  // }
  // if (response.status === 200) {
  // const { status, data } = response.data

  // if (status == "success") {
  // const { access, refresh } = data

  // localStorage.setItem("isVerified", true)
  // localStorage.setItem("refresh", access)
  // localStorage.setItem("accessToken", access)
  // }

  // return response
  // }

  return response
}

// http://127.0.0.1:8000/api/v1/auth/resend-email-token
/**
 *
 * @param {string} email is a string
 * @returns {Promise} - the incoming response
 */
export const resendEmailVerificationToken = async (email) => {
  // dont worry about it
  // bcuz validation is already done
  const response = await fetch.post(`/auth/resend-email-token`, {
    email,
  })

  // {
  //   "status": "success",
  //   "message": "Account has been verified successfully",
  //   "data": []
  // }
  return response
}

// /auth/change-password
// /auth/reset-password
export const sendResetPasswordEmail = async (email) => {
  // dont worry about it
  // bcuz validation is already done
  const response = await fetch.post(`/auth/reset-password`, {
    email,
  })

  //example response
  // {
  //   "status": "success",
  //   "message": "Password reset mail sent",
  //   "data": {
  //     "email": "tobi@gmail.com"
  //   }
  // }
  if (response.status === 200) {
    const { status, data } = response.data

    return response
  }

  return response
}

// /auth/reset-password/:uidb64/:token
export const verifyPasswordResetToken = async () => {
  const response = await fetch.get(`/auth/reset-password/:uidb64/:token`)

  //example response
  // {
  //   "status": "success",
  //   "message": "Token is valid",
  //   "data": {
  //     "token": "b8stry-983af9785ff9c558e2d2f33d60c34b16",
  //     "uidb64": "OA"
  //   }
  // }

  if (response.status === 200) {
    const { status, data } = response.data

    return response
  }

  return response
}

// http://127.0.0.1:8000/api/v1/auth/reset-password/set

// still working on it
export const updateUser = async (credentials) => {
  // dont worry about it
  // bcuz validation is already done
  const response = await fetch.patch(`/auth/user-profile`, credentials)

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
  }

  return response
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

export const getStatistics = async () => await fetch.get(`/statistics`)

//
export const getUserStatistics = async (userId) =>
  await fetch.get(`/users/${userId}/questions-stat`)

export const getUserQuestions = async (userId) =>
  await fetch.get(`/users/${userId}/questions`)

// Questions sections

export const getPublicQuestions = async (
  search,
  limit,
  category,
  difficulty,
  type
) =>
  await fetch.get(
    `/questions?limit=${limit}&category=${category}&difficulty=${difficulty}&type=${type}&search=${search}`
  )

//create
export const createNewQuestion = async (body) =>
  await fetch.post(`/questions`, body)

// read
export const getQuestionById = async (id) => await fetch.get(`/questions`)
//update
// /questions/:questionid
export const updateQuestionById = async (id, body) =>
  await fetch.put(`/questions/${id}`, body)
// delete
// /questions/:questionid
export const deleteQuestionById = async (id, body) =>
  await fetch.delete(`/questions/${id}`, body)

// verification

//
// /questions/:questionid/verification
export const verifyQuestionById = async (id, body) =>
  await fetch.post(`/questions/${id}/verification`, body)
// /questions/:questionid/verification
export const unverifyQuestionById = async (id) =>
  await fetch.delete(`/questions/${id}/verification`)

// staff only routes

// /users
export const getAllUsers = async () => await fetch.get(`/users`)

// /questions/full
export const getFullQuestions = async () => await fetch.get(`/questions/full`)

// /questions/unverified
export const getUnverifiedQuestions = async () =>
  await fetch.get(`/questions/unverified`)

// feedback..
// /feedback - user only route
export const getAllFeedback = async () => await fetch.get(`/feedback`)

// /feedback/
export const createFeedback = async (body) =>
  await fetch.post(`/feedback/`, body)

// /feedback/:feedbackid
export const getFeedbackById = async (id) => await fetch.get(`/feedback/${id}/`)

// /feedback/:feedbackid
export const deleteFeedbackById = async (id) =>
  await fetch.delete(`/feedback/${id}/`)

// /feedback/:feedbackid
export const updateFeedbackById = async (id, body) =>
  await fetch.put(`/questions/${id}/`, body)

// /categories
export const getAllCategories = async () => await fetch.get(`/categories`)

export const createNewCategory = async (body = { name: "", slug: "" }) =>
  await fetch.post(`/feedback/`, body)

// /categories/:categoryslug

export const deleteCategoryById = async (id) =>
  await fetch.delete(`/categories/${id}/`)

// /categories/:categoryslug

export const updateCategoryById = async (id, body) =>
  await fetch.put(`/categories/${id}/`, body)

//hurray... i hv finnished
