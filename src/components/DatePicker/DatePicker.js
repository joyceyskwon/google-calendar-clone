import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const DatePicker = () => {
  const today = new Date()
  const [selectedDay, setSelectedDay] = useState(today)

  return (
    <div className='datepicker-container flex flex-1'>
      <DayPicker
        mode="single"
        required
        selected={selectedDay}
        onSelect={setSelectedDay}
      />
    </div>
  )
}

export default DatePicker