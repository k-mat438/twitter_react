import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const SnackbarAlert = (props) => {

  const { openAlert, handleAlertClose } = props;
  return (
  <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleAlertClose}>
    <Alert
      onClose={handleAlertClose}
      severity="success"
      variant="filled"
      sx={{ width: '100%' }}
    >
      確認メールを送信しました。
    </Alert>
  </Snackbar>
  )
}