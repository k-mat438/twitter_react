import { useState } from "react";
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Box } from "@mui/material";
import { style } from "../styles/HomeStyle";


export const ModalWindow = () => {
  const [modalOpen, setOpen] = useState(false);
  const modalClickOpen = () => setOpen(true);
  const modalClickClose = () => setOpen(false);
  return (
    <Modal
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton aria-label="close" onClick={modalClickClose}>
              <IoIosCloseCircleOutline />
            </IconButton>
          </Box>
        </Box>
      </Modal>
  )
}
