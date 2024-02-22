import * as api from "../../api"
import { openAlertMessage } from "./alertActions"

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
}

// 修改后的getActions，移除了history参数
export const getActions = dispatch => {
  return {
    login: userDetails => dispatch(login(userDetails)),
    register: userDetails => dispatch(register(userDetails)),
  }
}

const setUserDetails = userDetails => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  }
}

const login = userDetails => {
  return async dispatch => {
    try {
      const response = await api.login(userDetails)
      console.log(response)
      if (response.error) {
        console.log(response?.error?.response?.data)
        dispatch(openAlertMessage(response?.error?.response?.data))
        return { success: false }
      } else {
        const { userDetails } = response?.data
        localStorage.setItem("user", JSON.stringify(userDetails))

        dispatch(setUserDetails(userDetails))
        // 不再在这里使用history.push，将在组件中使用navigate
        return { success: true }
      }
    } catch (error) {
      console.error("Login error:", error)
      dispatch(openAlertMessage(error.message))
      return { success: false }
    }
  }
}

const register = userDetails => {
  return async dispatch => {
    try {
      const response = await api.register(userDetails)
      console.log(response)
      if (response.error) {
        console.log(response?.error?.response?.data)
        dispatch(openAlertMessage(response?.error?.response?.data))
        return { success: false }
      } else {
        const { userDetails } = response?.data
        localStorage.setItem("user", JSON.stringify(userDetails))

        dispatch(setUserDetails(userDetails))
        // 不再在这里使用history.push，将在组件中使用navigate
        return { success: true }
      }
    } catch (error) {
      console.error("Register error:", error)
      dispatch(openAlertMessage(error.message))
      return { success: false }
    }
  }
}
