import React from 'react'
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler'
import { Scheduler, WeekView, Appointments, AppointmentForm, AllDayPanel } from '@devexpress/dx-react-scheduler-material-ui'

export default function Week() {
  return (
    <div id='week-container'>
      <Scheduler
        height={660}
      >
        <ViewState />
        <EditingState />
        <IntegratedEditing />
        <WeekView />
        <Appointments />
        <AppointmentForm />
        <AllDayPanel />
      </Scheduler>
    </div>
  )
}
