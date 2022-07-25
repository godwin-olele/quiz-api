import User from "../models/User.model"
import { thunk, action, createStore } from "easy-peasy"

import { getStatistics } from "../api"
// todo
// - [ ] Sign up
// - [ ] Account verification
// - [ ] Login
// - [ ] Users dashboard
// - [ ] Submission of questions
// - [ ] Admin Dashboard

const Statistics = {
  statistics: {
    question: {
      all_questions: 3,
      verified_questions: 2,
      unverified_questions: 1,
    },
    difficulty: {
      eazy: 2,
      medium: 1,
      hard: 0,
    },
    category: {
      Programming: 2,
      Nature: 0,
      "Computer science": 0,
      Animals: 0,
      Entertainments: 1,
    },
    users: {
      "Total Users": 10,
      "Total Staff": 5,
    },
  },
  // medthod
  setStatistics: action((state, payload) => {
    state.statistics = payload
  }),

  //actions
  fetchStatistics: thunk(async (actions) => {
    //do fetch
    try {
      const { data: res } = await getStatistics()
      const { status, message, data } = res

      if (status == "success") {
        actions.setStatistics(data)
        return data
      }
    } catch (e) {
      return null
    }
  }),
}

const Models = {
  User,
  Statistics,
}

export default createStore(Models)
