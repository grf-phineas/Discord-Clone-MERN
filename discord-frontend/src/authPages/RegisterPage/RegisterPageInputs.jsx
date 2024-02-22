import { Input } from "@mui/material"
import React from "react"
import InputWithLabel from "../../shared/components/InputWithLabel"

const RegisterPageInputs = props => {
  const { mail, setMail, username, setUsername, password, setPassword } = props
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="Email"
        type="text"
        placeholder="Enter your email"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter your username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
    </>
  )
}
export default RegisterPageInputs
