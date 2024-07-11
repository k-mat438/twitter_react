import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const RegisterFalseAlert = (props) => {
  const { falseRegister, handleAlertClose } = props;
  return (
    <Snackbar open={falseRegister.error} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleAlertClose}>
    <Alert
      onClose={handleAlertClose}
      severity="error"
      variant="filled"
      sx={{ width: '100%' }}
    >
      {falseRegister.alertMessage}
    </Alert>
  </Snackbar>
  )
}

export default RegisterFalseAlert
