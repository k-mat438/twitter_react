import {useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';

import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { IconContext } from 'react-icons';

import { CustomBackdrop } from "../../styles/DialogStyle";

export default function ScrollDialogButton(props) {
  const { variant, sx, buttonText, formComponent: FormComponent, setOpenAlert, setFalseRegister } = props;
  const [open, setOpen] = useState(false);
  const [ loading, setLoading ] = useState(true);
  
  const handleClickOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setLoading(false);
    },2000)
  };

  const handleClose = () => {
    setOpen(false);
    setLoading(true);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Button onClick={handleClickOpen} sx={sx} variant={variant}>{buttonText}</Button>
      <Dialog open={open} aria-labelledby="scroll-dialog-title" 
        aria-describedby="scroll-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "black",
            color: "white",
            boxShadow: "none",
            borderRadius: "1.5rem",
            maxHeight: "600px"
          }
        }}
        slots={{
          backdrop: CustomBackdrop
        }}
      >
        <DialogActions sx={{ padding:'0px', justifyContent:'left'}}>
          <IconButton aria-label="close" onClick={handleClose}>
            <IconContext.Provider value={{ color: '#B3B6B7',size:'1.2rem' }}>
              <IoIosCloseCircleOutline />
            </IconContext.Provider>
          </IconButton>
        </DialogActions>

        <DialogActions sx={{ display: 'flex', justifyContent: 'center', paddingTop:'0px'}}>
          <Box sx={{ fontSize: '2rem' }}>
            <BsTwitterX />
          </Box>
        </DialogActions>
        
        <DialogTitle id="scroll-dialog-title" sx={{ fontSize: '2rem', fontWeight: 'bold', padding: '0 80px' }}>{buttonText}</DialogTitle>
        <DialogContent sx={{ padding: '0 80px' }}>

          {loading ? 
            <Box sx={{display:'flex',justifyContent:'center'}}>
              <CircularProgress />
            </Box>
             : <FormComponent handleClose={handleClose} setOpenAlert={setOpenAlert} setFalseRegister={setFalseRegister}/>}
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
