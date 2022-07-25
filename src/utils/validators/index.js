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
  const { credential, password } = form

  // //email validation
  // if(email === '') errors['email'] = 'email cannot be empty'
  // // if(email.length < 3) errors['email'] = 'email cannot '
  // if(email.includes('@')) errors['email'] = 'please provide a valid email'

  //username validation
  if (credential === "") errors["credential"] = "cannot be empty"
  if (credential.length < 3)
    errors["credential"] = "cannot less than 3 characters"
  // if(username.includes('@')) errors['email'] = 'please provide a valid email'

  //username validation
  if (password === "") errors["password"] = "password cannot be empty"
  if (password.length < 8)
    errors["password"] = "password cannot less than 8 characters"
  return errors
}

export const validateUpdateProfile = (form) => {
  const errors = {}
  const { fullName, email, phone, username, password, confirmPassword } = form

  // check if all properties is empty

  // eslint-disable-next-line array-callback-return
  Object.keys(form).map((credential) => {
    if (credential === "") errors[credential] = `${credential} cannot be empty`
  })

  // the custom valiations here |

  //fullName validation
  if (fullName.length < 3)
    errors["fullName"] = "Fullname cannot less than 3 characters"

  //email validation
  if (email === "") errors["email"] = "email cannot be empty"
  if (!email.includes("@")) errors["email"] = "please provide a valid email"

  //username validation
  if (username.length < 6)
    errors["username"] = "username cannot less than 6 characters"

  //phone validation
  if (phone.length < 6) errors["phone"] = "phone cannot less than 6 characters"

  //password validation
  if (password !== "") {
    if (password.length < 8)
      errors["password"] = "password cannot less than 8 characters"

    //confirmPassword validation
    if (confirmPassword !== password)
      errors["confirmPassword"] = "passwords must match"
  }
  return errors
}

// export const validate...data = (form) => {
//   const errors = {}
//   const { date, time, location } = form

//   if (date === "") errors["date"] = "please select a valid date"

//   if (time === "") errors["time"] = "please pick a valid time"
//   if (location === "") errors["location"] = "please pick a valid location"

//   return errors
// }
