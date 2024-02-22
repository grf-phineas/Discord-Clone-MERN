import alertActions from "../actions/alertActions"

const initState = {
  showAlertMessage: false,
  alertMessage: null,
}

const reducer = (state = initState, action) => {
  console.log("state", state)
  console.log("action", action)

  switch (action.type) {
    case alertActions.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: true,
        alertMessage: action.content,
      }
    case alertActions.CLOSE_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: false,
        alertMessage: null,
      }
    default:
      return state
  }
}

export default reducer
