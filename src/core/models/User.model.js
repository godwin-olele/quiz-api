import { action, thunk } from "easy-peasy"
import { getUserDetails, logoutUser, getUserQuestions } from "../api"

// this is a model
const User = {
  user: JSON.parse(localStorage.getItem("userDetails")),
  loading: true,
  // medthods
  setLoading: action((state, payload) => (state.loading = payload)),
  setUser: action((state, payload) => (state.user = payload)),
  logout: thunk(({ setUser }) => logoutUser()),

  //actions
  // fetchUserDetails: thunk(async (actions) => {
  //   //do fetch
  //   try {
  //     return await getUserDetails()

  //   } catch (e) {
  //     return e
  //   }
  // }),

  questions: [],
  setQuestions: action((state, payload) => (state.questions = payload)),
  fetchUserQuestions: thunk(async (actions, payload) => {
    // actions.setLoading(true)
    //do fetch
    try {
      const { data: res } = await getUserQuestions(payload)
      const { status, message, data } = res

      if (status == "success") {
        // actions.setLoading(false)
        actions.setQuestions(data.results)
        return data
      }
    } catch (e) {
      return null
    }
  }),
}

export default User
