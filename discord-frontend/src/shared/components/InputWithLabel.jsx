import React from "react"
import { styled } from "@mui/material"

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
})

const Label = styled("p")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: 600,
  fontsize: "16px",
})

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#dcddde",
  backgroundColor: "#35393f",
  margin: 0,
  fontsize: "16px",
  padding: "0 5px",
})

const InputWithLabel = props => {
  const { value, setValue, label, type, placeholder } = props
  const handleValueChange = e => {
    setValue(e.target.value)
  }

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder}
      />
    </Wrapper>
  )
}
export default InputWithLabel