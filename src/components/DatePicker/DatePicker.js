import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedDate } from './DatePickerSlice'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

export default function DatePicker() {
  const selectedDate = useSelector(state => state.datePicker.selectedDate)
  const dispatch = useDispatch()
  console.log(selectedDate, ': selected date')

  const onClick = e => {
    let selectedStr = e.toString()
    dispatch(setSelectedDate(selectedStr))
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
