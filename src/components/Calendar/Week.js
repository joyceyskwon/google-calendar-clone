import React from 'react'
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler'
import { Scheduler, WeekView, Appointments, AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui'

const Week = () => {
  return (
    <div id='week-container flex flex-2'>
      <Scheduler>
        <ViewState />
        <EditingState />
        <IntegratedEditing />
        <WeekView />
        <Appointments />
        <AppointmentForm />
      </Scheduler>
    </div>
  )
}

export default Week