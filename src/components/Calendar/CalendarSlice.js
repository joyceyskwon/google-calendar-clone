import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    currentDate: dayjs(new Date()),
  },
  reducers: {
    moveToClickedDate: (state, action) => {
      state.currentDate = action.payload
    }
  }

})

export const { moveToClickedDate } = calendarSlice.actions
export default calendarSlice.reducer