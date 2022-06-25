import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { getMonth, getCurrentWeekIndex, displaySelectedWeek } from '../../adapter'

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    selectedDate: moment().format(),
    currentYear: moment().year(),
    currentMonth: moment().month(),
    currentMonthText: moment().format("MMMM"),
    monthIndex: moment().month(),
    currentWeekIndex: getCurrentWeekIndex(getMonth(), moment().format('YYYY-MM-DD')),
    currentWeek: getMonth(),
    weekLabels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    currentMonthDates: getMonth(),
    data: [],
    events: [],
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload
    },
    setCurrentMonth: (state, action) => {
      state.currentMonth = action.payload
    },
    setCurrentWeekIndex: (state, action) => {
      state.currentWeekIndex = action.payload
    },
    setMonthIndex: (state, action) => {
      state.monthIndex = action.payload
    },
    setSelectedWeek: (state, action) => {
      state.currentWeek = action.payload
    }
  }
})

export const { setSelectedDate, setCurrentMonth, setCurrentWeekIndex, setMonthIndex, setSelectedWeek } = calendarSlice.actions
export default calendarSlice.reducer