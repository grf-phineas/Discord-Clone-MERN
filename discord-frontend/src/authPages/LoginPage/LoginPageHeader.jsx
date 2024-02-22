import React from "react"
import { Typography } from "@mui/material"
const LoginPageHeader = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "white", textAlign: "center" }}>
        Welcome to Discord!
      </Typography>
      <Typography sx={{ color: "#b9bbbe" }}>
        We're so excited to have you here.
      </Typography>
    </>
  )
}
export default LoginPageHeader
