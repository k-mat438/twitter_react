
import { CustomBackdrop } from "../../../../styles/DialogStyle";
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { IoIosCloseCircleOutline } from "react-icons/io";
import { IconContext } from 'react-icons';
import TweetFormDialog from './TweetFormDialog';


const TweetDialog = (props) => {
  const { openPost, setOpenPost } = props;

  const handleClose = () => {
    setOpenPost(false)
  }
  
  return (
    <>
      <Dialog open={openPost} aria-labelledby="scroll-dialog-title" 
        aria-describedby="scroll-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "black",
            color: "white",
            boxShadow: "none",
            borderRadius: "1rem",
            maxHeight: "600px",
            width: "520px",
            position: "absolute",
            top: 30,
            margin: 0,
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

        <DialogContent sx={{ padding: '0 10px' }}>
          <TweetFormDialog setOpenPost={setOpenPost}/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default TweetDialog
