import React, { useState, useEffect } from "react"
import AuthBox from "../../shared/components/AuthBox"
import RegisterPageInputs from "./RegisterPageInputs"
import { Typography } from "@mui/material"
import RegisterPageFooter from "./RegisterPageFooter"
import { validateRegisterForm } from "../../shared/utils/validator"
import { connect } from "react-redux"
import { getActions } from "../../store/actions/authActions"
import { useNavigate } from "react-router-dom"

const RegisterPage = ({ register }) => {
  const [mail, setMail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }))
  }, [mail, username, password])

  const handleRegister = () => {
    const userDetails = {
      mail,
      username,
      password,
    }
    if (result.success) {
      // 假设你的login action在成功登录后返回一个对象，其中包含一个success属性
      navigate("/dashboard")
    }
  }

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white ", textAlign: "center" }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  )
}

const mapActionsToProps = dispatch => {
  return {
    ...getActions(dispatch),
  }
}
export default connect(null, mapActionsToProps)(RegisterPage)
