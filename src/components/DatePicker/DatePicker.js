import React from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedDate } from '../Calendar/CalendarSlice'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

export default function DatePicker() {
  const selectedDate = useSelector(state => state.calendar.selectedDate)
  const dispatch = useDispatch()

  const onClick = e => {
    let formattedDate = moment(e).format('YYYY-MM-DD HH:mm:ss')
    dispatch(setSelectedDate(formattedDate))
  }

  return (
    <DayPicker
      mode="single"
      required
      selected={selectedDate}
      onSelect={e => onClick(e)}
    />
  )
}
