import moment from 'moment'

export const getMonth = (month = moment().month()) => {
  const year = moment().year()
  const firstDayOfMonth = moment(new Date(year, month, 1)).date()
  let currentMonthCount = 0 - firstDayOfMonth

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++
      return moment(new Date(year, month, currentMonthCount)).format()
    })
  })
  return daysMatrix // (5) [Array(7), Array(7), Array(7), Array(7), Array(7)]
}

export const getCurrentWeekIndex = (monthArr) => {
  let foundDayIdx
  let m = moment().set({hour:0,minute:0,second:0,millisecond:0})
  m.toISOString()
  let formattedMoment = m.format()
  for (let i = 0; i < monthArr.length; i++) {
    foundDayIdx = monthArr[i].indexOf(formattedMoment)
    if (foundDayIdx > -1) {
      return i // returns which index of the month current day is in
    }
  }
}

let currentMonthNumber = moment().month()

export const displaySelectedWeek = (direction) => {
  let currentWeekIdx = getCurrentWeekIndex(getMonth())
  if (!direction && currentWeekIdx < 34) {
    return getMonth()[currentWeekIdx]
  }
  // if (direction === 'prev' && currentWeekIdx < 0) {
  //   currentMonthNumber = moment().subtract(1, 'month').month()
  //   currentWeekIdx = 35
  //   currentWeekIdx -= 7
  //   return getMonth(currentMonthNumber).slice(currentWeekIdx - 7, currentWeekIdx)
  // }
  if (direction === 'next') {
    if (currentWeekIdx > 35) {
      currentMonthNumber = moment().add(1, 'month').month()
      let currentWeekIdx = 0
      currentWeekIdx += 7
      console.log(getMonth(moment().add(1, 'month').month()), ': get month after')
      console.log(currentWeekIdx, ': CURRENT WEEK INDEX')
      return getMonth(moment().add(1, 'month').month()).slice(currentWeekIdx, currentWeekIdx + 7)
    }
    console.log(currentMonthNumber, ': current month')
    console.log(currentWeekIdx, ': CURRENT WEEK INDEX')
    currentWeekIdx += 7
    return getMonth().slice(currentWeekIdx, currentWeekIdx + 7)
  }
}
