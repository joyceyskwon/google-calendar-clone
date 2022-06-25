import './App.css';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import Week from './components/Calendar/Week'
import DatePicker from './components/DatePicker/DatePicker'
import NewEventForm from './components/NewEvent/NewEventForm';
import { setCurrentMonth } from './components/Calendar/CalendarSlice';
import { getMonth } from './adapter'

export default function App() {
  const dispatch = useDispatch()
  const monthIndex = useSelector(state => state.calendar.monthIndex)
  useEffect(() => {
    dispatch(setCurrentMonth(getMonth(monthIndex)))
  }, [monthIndex])

  return (
    <div className="App">
      <Navbar />
      <div className='calendar-container'>
        <div className='sidebar-container'>
          <NewEventForm />
          <DatePicker />
        </div>
        <Week 
        />
      </div>
    </div>
  );
}
