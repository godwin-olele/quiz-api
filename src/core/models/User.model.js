import { action, thunk } from "easy-peasy"
import { getUserDetails, logoutUser } from "../api"

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
}

export default User
