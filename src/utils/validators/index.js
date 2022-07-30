/// user validator
export const validateSignupData = (form) => {
  const errors = {}
  const { username, email, password, password2 } = form

  // check if all properties is empty

  // eslint-disable-next-line array-callback-return
  Object.keys(form).map((credential) => {
    if (credential === "") errors[credential] = `${credential} cannot be empty`
  })

  // the custom valiations here |

  //email validation
  if (email === "") errors["email"] = "email cannot be empty"
  if (!email.includes("@")) errors["email"] = "please provide a valid email"

  //username validation
  if (username.length < 3)
    errors["username"] = "username cannot less than 3 characters"

  //password validation
  if (password.length < 8)
    errors["password"] = "password cannot less than 8 characters"

  //confirmPassword validation
  if (password2 !== password) errors["password2"] = "passwords must match"

  return errors
}

export const validateSigninData = (form) => {
  const errors = {}
  const { username, password } = form

  // //email validation
  // if(email === '') errors['email'] = 'email cannot be empty'
  // // if(email.length < 3) errors['email'] = 'email cannot '
  // if(email.includes('@')) errors['email'] = 'please provide a valid email'

  //username validation
  if (username === "") errors["username"] = "cannot be empty"
  if (username.length < 3)
    errors["username"] = "cannot less than 3 characters"
  // if(username.includes('@')) errors['email'] = 'please provide a valid email'

  //username validation
  if (password === "") errors["password"] = "password cannot be empty"
  if (password.length < 8)
    errors["password"] = "password cannot less than 8 characters"
  return errors
}

// export const validateUpdateProfile = (form) => {
//   const errors = {}
//   const { fullName, email, phone, username, password, confirmPassword } = form

//   // check if all properties is empty

//   // eslint-disable-next-line array-callback-return
//   Object.keys(form).map((credential) => {
//     if (credential === "") errors[credential] = `${credential} cannot be empty`
//   })

//   // the custom valiations here |

//   //fullName validation
//   if (fullName.length < 3)
//     errors["fullName"] = "Fullname cannot less than 3 characters"

//   //email validation
//   if (email === "") errors["email"] = "email cannot be empty"
//   if (!email.includes("@")) errors["email"] = "please provide a valid email"

//   //username validation
//   if (username.length < 6)
//     errors["username"] = "username cannot less than 6 characters"

//   //phone validation
//   if (phone.length < 6) errors["phone"] = "phone cannot less than 6 characters"

//   //password validation
//   if (password !== "") {
//     if (password.length < 8)
//       errors["password"] = "password cannot less than 8 characters"

//     //confirmPassword validation
//     if (confirmPassword !== password)
//       errors["confirmPassword"] = "passwords must match"
//   }
//   return errors
// }

// export const validate...data = (form) => {
//   const errors = {}
//   const { date, time, location } = form

//   if (date === "") errors["date"] = "please select a valid date"

//   if (time === "") errors["time"] = "please pick a valid time"
//   if (location === "") errors["location"] = "please pick a valid location"

//   return errors
// }

const question = {
  question: "",
  difficulty: "",
  type: "",
  category: 1,
  correct_answer: "",
  incorrect_answer_fields: {
    incorrect_answer_1: "",
    incorrect_answer_2: "",
    incorrect_answer_3: "",
  },
  explanation: "",
  image: "",
}

export const validateSubmitQuestion = (form) => {
  const {
    question,
    difficulty,
    type,
    category,
    correct_answer,
    incorrect_answer_fields,
    explanation,
    image,
  } = form

  const errors = {}

  if (question === "") errors["question"] = "cannot be empty"
  if (question.length < 3) errors["question"] = "cannot less than 3 characters"

  if (difficulty === "") errors["difficulty"] = "cannot be empty"

  if (type === "") errors["type"] = "cannot be empty"
  if (!category) errors["category"] = "please provide a valid category id"
  if (correct_answer === "") errors["correct_answer"] = "cannot be empty"

  const incorrectErrors = validateIncorrectAnswerFields(incorrect_answer_fields)
  if (Object.keys(incorrectErrors).length > 0)
    errors["incorrect_answer_fields"] = incorrectErrors

  if (explanation === "") errors["explanation"] = "cannot be empty"
  // if (image === "") errors["image"] = "cannot be empty"

  return errors
}

const validateIncorrectAnswerFields = (
  incorrectAnswers = { incorrect_answer_1: "", incorrect_answer_2: "" }
) => {
  const errors = {}

  const { incorrect_answer_1, incorrect_answer_2, incorrect_answer_3 } =
    incorrectAnswers

  if (incorrect_answer_1) {
    if (incorrect_answer_1 === "")
      errors["incorrect_answer_1"] = "cannot be empty"
  } else {
    if (incorrect_answer_1 === "") errors["incorrect_answer_1"] = "required"
  }

  if (incorrect_answer_2) {
    if (incorrect_answer_2 === "")
      errors["incorrect_answer_2"] = "cannot be empty"
  }

  if (incorrect_answer_3) {
    if (incorrect_answer_3 === "")
      errors["incorrect_answer_3"] = "cannot be empty"
  }

  return errors
}

export const validateSendFeedback = (form) => {
  const { question, issue, explanation } = form

  const errors = {}

  if (!question) errors["question"] = "is required"

  if (issue === "") errors["issue"] = "cannot be empty"
  if (explanation === "") errors["explanation"] = "cannot be empty"
  if (explanation < 3)
    errors["explanation"] = "cannot be less than 3 characters"

  return errors
}

export const validateApiHelper = (form) => {
  const { limit, category, difficulty, type } = form

  const errors = {}

  // if (!limit) errors["question"] = "is required"

  if (limit === "") errors["limit"] = "cannot be empty"
  if (category === "") errors["category"] = "cannot be empty"
  if (difficulty === "") errors["difficulty"] = "cannot be empty"
  if (type === "") errors["type"] = "cannot be empty"

  return errors
}
