import User from "../models/User.model"
import { thunk, action, createStore } from "easy-peasy"

import { getStatistics, getUserStatistics } from "../api"
// todo
// - [x] Sign up
// - [x] Account verification
// - [x] Login
// - [ ] Users dashboard --
// - [ ] Submission of questions --
// - [ ] Admin Dashboard

const Statistics = {
  // model
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

  loading: true,
  setLoading: action((state, payload) => {
    state.loading = payload
  }),

  //model
  userStatistics: {},
  // method
  setUserStatistics: action((state, payload) => {
    state.userStatistics = payload
  }),

  //actions
  fetchUserStatistics: thunk(async (actions, payload) => {
    actions.setLoading(true)
    //do fetch
    try {
      const { data: res } = await getUserStatistics(payload)
      const { status, message, data } = res

      if (status == "success") {
        actions.setLoading(false)
        actions.setUserStatistics(data)
        return data
      }
    } catch (e) {
      return null
    }
  }),
}

// {
//   "all_question": 1,
//   "verified_questions": 1,
//   "unverified_questions": 0
// }

const Models = {
  User,
  Statistics,
}

export default createStore(Models)
