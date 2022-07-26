import { action, thunk } from "easy-peasy"
import { getUserDetails } from "../api"

// this is a model
const User = {
  user: JSON.parse(localStorage.getItem("userDetails")),
  loading: true,
  // medthods
  setLoading: action((state, payload) => {
    state.loading = payload
  }),
  setUser: action((state, payload) => {
    /// do fectchUser
    state.user = payload
  }),
  //actions
  fetchUserDetails: thunk(async (actions) => {
    //do fetch
    try {
      const { data: res } = await getUserDetails()
      const { status, message, data } = res

      console.log(res)
      if (status == "success") {
        actions.setUser(data)
        actions.setLoading(false)

        return data
      }
    } catch (e) {
      console.log(e)
      return null
    }
  }),
}

export default User
