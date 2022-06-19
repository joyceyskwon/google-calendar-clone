import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

export const datePickerSlice = createSlice({
  name: 'datePicker',
  initialState: {
    selectedDate: new Date(),
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload
    },
  }
})

export const { setSelectedDate } = datePickerSlice.actions
export default datePickerSlice.reducer