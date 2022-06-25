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
  // let currentWeek = monthArr.find(week => week.find(day => day.includes(moment().format('YYYY-MM-DD'))))
  // console.log(currentWeek, ': current week')
  let answerIdx
  for (let i = 0; i < monthArr.length; i++) {
    answerIdx = monthArr[i].find(day => {
      if (day.includes(moment().format('YYYY-MM-DD'))) {
        return i
      }
    })
    // let index = monthArr[i].indexOf(currentWeek)
    if (answerIdx > -1) {
      return [i, answerIdx]
    }
  }
  console.log(answerIdx, ': answerIdx')
}

let currentWeekIdx = 0
let currentMonthNumber = moment().month()

export const displaySelectedWeek = (direction) => {
  if (!direction && currentWeekIdx < 34) {
    return getMonth().slice(currentWeekIdx, currentWeekIdx + 7)
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
