import { action } from "easy-peasy"

// this is a model
const User = {
  user: null,
  fetchUserDetails: action((state) => {
    /// do fectchUser
  }),
}

export default User
