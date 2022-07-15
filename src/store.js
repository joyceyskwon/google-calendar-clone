import { configureStore } from '@reduxjs/toolkit'
import calendarReducer from './components/Calendar/CalendarSlice'
import datePickerReducer from './components/DatePicker/DatePickerSlice'
import newEventReducer from './components/NewEvent/NewEventSlice'

export default configureStore({
  reducer: {
    calendar: calendarReducer,
    datePicker: datePickerReducer,
    newEvent: newEventReducer,
  }
})