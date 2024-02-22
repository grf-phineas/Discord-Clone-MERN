import React from "react"
import Alert from "@mui/material/Alert"
import { Snackbar } from "@mui/material"
import { connect } from "react-redux"
import { getActions } from "../../store/actions/alertActions"

const AlertNotification = ({
  showAlertMessage,
  closeAlertMessage,
  alertMessage,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessage}
      onClose={closeAlertMessage}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessage}</Alert>
    </Snackbar>
  )
}

const mapStateToProps = ({ alert }) => {
  return {
    ...alert,
  }
}

const mapActionsToProps = dispatch => {
  return {
    ...getActions(dispatch),
  }
}

export default connect(mapStateToProps, mapActionsToProps)(AlertNotification)
