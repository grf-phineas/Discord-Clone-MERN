export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateMail(mail)
  const isPasswordValid = validatePassword(password)
  return isMailValid && isPasswordValid
}

export const validateRegisterForm = ({ mail, username, password }) => {
  const isMailValid = validateMail(mail)
  const isUsernameValid = validateUsername(username)
  const isPasswordValid = validatePassword(password)
  return isMailValid && isUsernameValid && isPasswordValid
}

const validatePassword = password => {
  return password.length >= 6 && password.length <= 12
}

const validateMail = mail => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  return emailPattern.test(mail)
}

const validateUsername = username => {
  return username.length >= 3 && username.length <= 12
}
