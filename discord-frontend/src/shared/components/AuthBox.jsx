import react from "react"
import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"

//这是界面中间的框框
const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#5865F2",
})

const AuthBox = props => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          height: 400,
          bgcolor: "#36393f",
          borderRadius: "5px",
          boxShadow: "0px 2px 10px 0 rgb(0 0 0 /20%)",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  )
}
export default AuthBox
