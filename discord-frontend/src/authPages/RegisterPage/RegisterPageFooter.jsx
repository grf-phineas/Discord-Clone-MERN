import React from "react"
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"
import RedirectInfo from "../../shared/components/RedirectInfo"
import { useNavigate } from "react-router-dom"
import { Tooltip } from "@mui/material"

const getFormNotValidMessage = () => {
  return "Username should contains between 3 and 12 characters and password should contains between 6 and 12 characters. Also valid e-mail address is required."
}

const getFormValidMessage = () => {
  return "Press to register."
}

const LoginPageFooter = ({ isFormValid, handleRegister }) => {
  const navigate = useNavigate()

  const handlePushToLoginPage = () => {
    navigate("/login")
  }

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have an account?"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  )
}
export default LoginPageFooter
