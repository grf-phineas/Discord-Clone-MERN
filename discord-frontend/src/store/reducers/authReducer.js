import { authActions } from "../actions/authActions"

const initState = {
  userDetails: null,
}

const reducer = (state = initState, action) => {
  console.log("Login_state", state)
  console.log("Login_action", action)
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      }
    default:
      return state
  }
}

export default reducer
