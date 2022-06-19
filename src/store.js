import { configureStore } from '@reduxjs/toolkit'
import calendarReducer from './components/Calendar/CalendarSlice'

export default configureStore({
  reducer: {
    // add reducers like so,
    calendar: calendarReducer,
  }
})