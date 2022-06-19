import { configureStore } from '@reduxjs/toolkit'
import calendarReducer from './components/Calendar/CalendarSlice'
import datePickerReducer from './components/DatePicker/DatePickerSlice'

export default configureStore({
  reducer: {
    calendar: calendarReducer,
    datePicker: datePickerReducer,
  }
})