import { createSlice } from '@reduxjs/toolkit'

let currentDateStr = new Date().toString()

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    currentDate: currentDateStr,
    events: [],
  },
  reducers: {
    moveToClickedDate: (state, action) => {
      state.currentDate = action.payload
    },
  }
})

export const { moveToClickedDate } = calendarSlice.actions
export default calendarSlice.reducer