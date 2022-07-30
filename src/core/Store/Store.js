import { createStore } from "easy-peasy"

import User from "../models/User.model"
import Statistics from "../models/Statistics.model"

// todo
// - [x] Sign up
// - [x] Account verification
// - [x] Login
// - [x] Users dashboard --
// - [x] Submission of questions --
// - [x] Admin Dashboard

const Models = {
  User,
  Statistics,
}

export default createStore(Models)
