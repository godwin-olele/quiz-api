import User from "../models/User.model"
import { action } from "easy-peasy"

// todo
// - [ ] Sign up
// - [ ] Account verification
// - [ ] Login
// - [ ] Users dashboard
// - [ ] Submission of questions
// - [ ] Admin Dashboard

const Statistics = {
  statistics: null,
  fetchStatistics: action((state) => {
    //do fetch
  }),
}

const Store = {
  User,
  Statistics,
}

export default Store
