import User from "../models/User.model"
import { action } from "easy-peasy"

import { getStatistics } from "../api"
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
    getStatistics()
      .then(({ data: res }) => {
        const { status, message, data } = res

        console.log(res)
        state.statistics = data
        return state
      })
      .catch(({ response: { data: res } }) => {
        const { status, message, error } = res

        console.log(res)
      })
  }),
}

const Store = {
  User,
  Statistics,
}

export default Store
