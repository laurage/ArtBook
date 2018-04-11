import moment from 'moment'

export const createWeeksMatrix = (currentDate) => {
  const startOfMonth = moment(currentDate).startOf('month')
  const endOfMonth = moment(currentDate).endOf('month')
  const numberOfDaysFromPreviousMonthOnPanel = (startOfMonth.day() === 0) ? 6 : startOfMonth.day() - 1

  const startOfCurrentPanel = startOfMonth.clone().subtract(numberOfDaysFromPreviousMonthOnPanel, 'day')

  const weeksOnPanel = [];
  const currentDayToBeDrawn = startOfCurrentPanel.clone();

  let numberOfDaysNextMonthOnPanel
  console.log('firstdays', numberOfDaysFromPreviousMonthOnPanel + endOfMonth.date())
  if (numberOfDaysFromPreviousMonthOnPanel + endOfMonth.date() > 35) {
    numberOfDaysNextMonthOnPanel = 42 - 35
  }

  const totalDaysOnPanel = numberOfDaysFromPreviousMonthOnPanel + endOfMonth.date() + numberOfDaysNextMonthOnPanel -1
  console.log(totalDaysOnPanel)
  // let numberOfLinesOnPanel = 4
  // if (numberOfDaysFromPreviousMonthOnPanel + endOfMonth.date() > 35) {
  //   numberOfLinesOnPanel = true
  // }

  for (let i = 0; i < totalDaysOnPanel; i += 1) {
    // at 0, 7, 14, 21, 28 we create a new array that we push in our matrix of arrays, weeksOnPanel
    if (i % 7 === 0) {
      weeksOnPanel.push([]);
    }

    let day
    day = currentDayToBeDrawn.clone();

    // we push our day in the last array created in weeksOnPanel
    weeksOnPanel[weeksOnPanel.length - 1].push(day)

    currentDayToBeDrawn.add(1, 'day');
  }
  console.log(weeksOnPanel)
return weeksOnPanel
}
