import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'



export const datePickerSlice = createSlice({
  name: 'datePicker',
  initialState: {
    selectedDate: moment().format(),
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload
    },
  }
})

export const { setSelectedDate } = datePickerSlice.actions
export default datePickerSlice.reducer