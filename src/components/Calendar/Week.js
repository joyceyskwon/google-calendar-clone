import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedDate } from './CalendarSlice'
import moment from 'moment'
import Day from './Day'
import { Bar } from 'react-chartjs-2'
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler'
import { Scheduler, WeekView, Appointments, AllDayPanel } from '@devexpress/dx-react-scheduler-material-ui'
import {Chart as ChartJS} from 'chart.js/auto'
import Paper from '@mui/material/Paper';
import { Chart, BarSeries, Title, ArgumentAxis, ValueAxis } from '@devexpress/dx-react-chart-material-ui';

export default function Week() {
  const currentWeekIndex = useSelector(state => state.calendar.currentWeekIndex)
  const currentWeekDates = useSelector(state => state.calendar.currentWeek)
  const currentMonthDates = useSelector(state => state.calendar.currentMonthDates)
  const weekCalendarLabels = useSelector(state => state.calendar.weekLabels)
  const eventData = useSelector(state => state.calendar.data)
  const selectedDate = useSelector(state => state.calendar.selectedDate)
  const dispatch = useDispatch()

  // const currentDateChange = selectedDate => {
  //   let date = new Date(selectedDate.toString())
  //   let formattedDate = moment(date).format('MM-DD-YYYY HH:mm:ss')
  //   dispatch(setSelectedDate(formattedDate))
  // }

  // const styles = {
  //   width: '100%',
  // }

  // const weekCalendarData = {
  //   labels: weekCalendarLabels,
  //   datasets: [{
  //     label: 'none',
  //     data: eventData,
  //   }],
  //   type: 'time',
  // }
  console.log(currentWeekDates)
  console.log(currentWeekIndex, ': current week index')
  
  return (
    <div id='week-container' className='flex-1 grid grid-cols-7'>
      {currentWeekDates.map((column, i) => {
        
          
            return <Day day={column} key={i} />
          
        
      })}
    </div>
  )
}
// <Bar data={weekCalendarData} />
      // <Scheduler
      //   height={660}
      // >
      //   <ViewState 
      //     currentDate={selectedDate}
      //     onCurrentDateChange={e => currentDateChange(e)}
      //   />
      //   <EditingState />
      //   <IntegratedEditing />
      //   <WeekView />
      //   <Appointments />
      //   <AllDayPanel />
      // </Scheduler>
