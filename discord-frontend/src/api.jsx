import axios from "axios"
import { logout } from "./shared/utils/auth"
const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 1000,
})

apiClient.interceptors.request.use(
  config => {
    const userDetails = localStorage.getItem("token")
    if (userDetails) {
      const token = JSON.parse(userDetails).token
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

export const login = async data => {
  try {
    const response = await apiClient.post("/auth/login", data)
    return response
  } catch (error) {
    return {
      error: true,
      error,
    }
  }
}

export const register = async data => {
  try {
    const response = await apiClient.post("/auth/register", data)
    return response
  } catch (error) {
    return {
      error: true,
      error,
    }
  }
}

// secure routes
const checkResponseCode = exception => {
  const responseCode = exception?.response?.status
  if (responseCode) {
    ;(responseCode === 401 || responseCode === 403) && logout()
  }
}
