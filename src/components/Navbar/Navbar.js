import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedDate } from '../DatePicker/DatePickerSlice'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { displaySelectedWeek } from '../../adapter'
import { setSelectedWeek, setMonthIndex } from '../Calendar/CalendarSlice';

export default function Navbar() {
  const currentWeekDates = useSelector(state => state.calendar.currentWeek)
  const monthIndex = useSelector(state => state.calendar.monthIndex)
  const currentMonthText = useSelector(state => state.calendar.currentMonthText)
  const currentYear = useSelector(state => state.calendar.currentYear)
  const selectedDate = useSelector(state => state.calendar.selectedDate)
  const dispatch = useDispatch()

  const handlePrevWeek = () => {
    dispatch(setMonthIndex(monthIndex - 1))
  }
  const handleNextWeek = () => {
    dispatch(setMonthIndex(monthIndex + 1))
  }

  return (
    <div className='navbar-container'>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <MenuIcon sx={{ mr: 2 }} />
          <ArrowBackIosIcon 
            sx={{ ml: 35, mr: 2 }}
            type={'back'}
            onClick={() => handlePrevWeek}
          />
          <ArrowForwardIosIcon
            sx={{ mr: 2 }}
            onClick={() => handleNextWeek}
          />
          <h3 className='navbar-month-year'>{currentMonthText} {currentYear}</h3>
        </Toolbar>
      </AppBar>
    </div>
  )
}
