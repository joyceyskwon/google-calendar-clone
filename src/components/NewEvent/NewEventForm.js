import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { setEventDateTime } from './NewEventSlice';

export default function NewEventForm() {
  const eventDateTime = useSelector(state => state.newEvent.eventDateTime)
  const dispatch = useDispatch()
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
    '& .MuiTextField-root': { m: 1, width: '25ch', paddingBottom: '30px' }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => setOpen(true)}
      >+ Create</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box 
          component="form"
          sx={style}
        >
          <div>
            <TextField id="standard-basic" label="Add event title" variant="standard" />
          </div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={eventDateTime}
              onChange={(newValue) => {
                console.log(newValue, ": new event date time value")
                dispatch(setEventDateTime(newValue));
              }}
            />
          </LocalizationProvider>
          <div className="px-2 py-3">
            <Button
              variant="contained"
              onClick={() => setOpen(false)}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}