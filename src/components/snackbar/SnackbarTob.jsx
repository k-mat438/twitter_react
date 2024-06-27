import Snackbar from '@mui/material/Snackbar';

export const SnackbarTop = (props) => {

  const { vertical, horizontal,handleClose, open } = props;
  return (
    <Snackbar
    anchorOrigin={{ vertical, horizontal }}
    open={open}
    onClose={handleClose}
    autoHideDuration={2500}
    message="Not available yet"
    key={vertical + horizontal}
    ContentProps={{
      style: {
        backgroundColor: '#FFC107',
        color: 'black', 
      },
    }}
  />
  )
}