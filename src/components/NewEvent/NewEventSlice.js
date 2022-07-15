import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const newEventSlice = createSlice({
  name: 'newEvent',
  initialState: {
    eventDateTime: moment().format(),
  },
  reducers :{
    setEventDateTime: (state, action) => {
      state.eventDateTime = action.payload
    }
  }
})

export const { setEventDateTime } = newEventSlice.actions
export default newEventSlice.reducer