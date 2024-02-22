import React, { useState, useEffect } from "react"
import AuthBox from "../../shared/components/AuthBox"
import LoginPageHeader from "./LoginPageHeader"
import LoginPageInputs from "./LoginPageInputs"
import LoginPageFooter from "./LoginPageFooter"
import { validateLoginForm } from "../../shared/utils/validator"
import { connect } from "react-redux"
import { getActions } from "../../store/actions/authActions"
import { useNavigate } from "react-router-dom"
const LoginPage = ({ login }) => {
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }))
  }, [mail, password])

  const handleLogin = async () => {
    const userDetails = {
      mail,
      password,
    }
    const result = await login(userDetails)
    if (result.success) {
      // 假设你的login action在成功登录后返回一个对象，其中包含一个success属性
      navigate("/dashboard")
      console.log(result)
    }
  }
  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  )
}

const mapActionsToProps = dispatch => {
  return {
    ...getActions(dispatch),
  }
}

export default connect(null, mapActionsToProps)(LoginPage)
