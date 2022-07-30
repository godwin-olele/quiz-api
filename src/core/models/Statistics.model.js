import { thunk, action } from "easy-peasy"

import {
  getStatistics,
  getUserStatistics,
  getAllUsers,
  addUserStaff,
  removeUserStaff,
  verifyQuestionById,
  unverifyQuestionById,
  getUnverifiedQuestions,
} from "../api"

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
        actions.setLoading(false)
        actions.setStatistics(data)
        return data
      }
    } catch (e) {
      return null
    }
  }),

  loading: true,
  setLoading: action((state, payload) => (state.loading = payload)),

  //model
  userStatistics: {},
  // method
  setUserStatistics: action(
    (state, payload) => (state.userStatistics = payload)
  ),

  //actions
  fetchUserStatistics: thunk(
    async (actions, payload, { getStoreState, getState }) => {
      // const id = getStoreState(({ User }) => User.user.id)
      // console.log(id)
      // actions.setLoading(true)
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
    }
  ),

  //model
  users: [],
  // method
  setUsers: action((state, payload) => (state.users = payload)),

  //actions
  fetchAllUsers: thunk(async (actions, payload) => {
    // actions.setLoading(true)
    //do fetch
    try {
      const { data: res } = await getAllUsers()
      const { status, message, data } = res

      if (status == "success") {
        //  actions.setLoading(false)
        actions.setUsers(data.results)
        return data
      }
    } catch (e) {
      return null
    }
  }),

  //actions
  addUserStaff: thunk(async (actions, payload) => {
    // actions.setLoading(true)
    //do fetch
    try {
      const { data: res } = await addUserStaff(payload)
      const { status, message, data } = res

      if (status == "success") {
        //  actions.setLoading(false)

        return message
      }
    } catch (e) {
      return null
    }
  }),

  //actions
  removeUserStaff: thunk(async (actions, payload) => {
    // actions.setLoading(true)
    //do fetch
    try {
      const { data: res } = await removeUserStaff(payload)
      const { status, message, data } = res

      if (status == "success") {
        return message
      }
    } catch (e) {
      return null
    }
  }),

  //model
  questions: [],
  // method
  setQuestions: action((state, payload) => (state.questions = payload)),

  //actions
  fetchAllQuestions: thunk(async (actions, payload) => {
    // actions.setLoading(true)
    //do fetch
    try {
      const { data: res } = await getUnverifiedQuestions()
      const { status, message, data } = res

      if (status == "success") {
        //  actions.setLoading(false)
        actions.setQuestions(data.results)

        return data
      }
    } catch (e) {
      return null
    }
  }),

  //actions
  verifyQuestion: thunk(async (actions, payload) => {
    // actions.setLoading(true)
    //do fetch
    try {
      const { data: res } = await verifyQuestionById(payload)
      const { status, message, data } = res

      if (status == "success") {
        //  actions.setLoading(false)

        return message
      }
    } catch (e) {
      return null
    }
  }),

  //actions
  unverifyQuestion: thunk(async (actions, payload) => {
    // actions.setLoading(true)
    //do fetch
    try {
      const { data: res } = await unverifyQuestionById(payload)
      const { status, message, data } = res

      if (status == "success") {
        //  actions.setLoading(false)

        return message
      }
    } catch (e) {
      return null
    }
  }),
}

export default Statistics
