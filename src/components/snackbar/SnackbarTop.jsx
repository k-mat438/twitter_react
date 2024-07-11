import Snackbar from '@mui/material/Snackbar';

export const SnackbarTop = (props) => {

  const { handleClose, openBar } = props;
  return (
    <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={openBar}
    onClose={handleClose}
    autoHideDuration={2500}
    message="Not available yet"
    // key={vertical + horizontal}
    ContentProps={{
      style: {
        backgroundColor: '#FFC107',
        color: 'black', 
      },
    }}
  />
  )
}