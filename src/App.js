// use redux to move >,< between the weeks (좌측 date-picker 우측 weekly가 함께 이동해야함)
// use redux to retain existing events

import './App.css';
import React, { useState } from 'react'
import { getMonth } from './adapter'
import Navbar from './components/Navbar/Navbar'
import Week from './components/Calendar/Week'
import DatePicker from './components/DatePicker/DatePicker'

function App() {
  // const [currentWeek, setCurrentWeek] = useState(getMonth())
  return (
    <div className="App">
      <Navbar />
      <div className='calendar-container'>
        <DatePicker />
        <Week />
      </div>
    </div>
  );
}

export default App;
