import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function NewEventForm() {
  const [open, setOpen] = useState(false)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <button 
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => setOpen(true)}
      >+ Create</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <TextField id="standard-basic" label="Add title" variant="standard" />
          <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => setOpen(false)}
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}