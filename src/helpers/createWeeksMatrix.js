import moment from 'moment'

export const createWeeksMatrix = (displayedMoment) => {
  const startOfMonth = moment(displayedMoment).startOf('month')
  const endOfMonth = moment(displayedMoment).endOf('month')
  const numberOfDaysFromPreviousMonthOnPanel = (startOfMonth.day() === 0) ? 6 : startOfMonth.day() - 1

  const startOfCurrentPanel = startOfMonth.clone().subtract(numberOfDaysFromPreviousMonthOnPanel, 'day')

  const weeksOnPanel = [];
  const currentDayToBeDrawn = startOfCurrentPanel.clone();

  let numberOfDaysNextMonthOnPanel

  const numberOfDaysPreviousAndCurrentMonthOnPanel = numberOfDaysFromPreviousMonthOnPanel + endOfMonth.date()
  if (numberOfDaysPreviousAndCurrentMonthOnPanel === 35) {
    numberOfDaysNextMonthOnPanel = 0
  } else if (numberOfDaysPreviousAndCurrentMonthOnPanel > 35) {
    numberOfDaysNextMonthOnPanel = 42 - numberOfDaysPreviousAndCurrentMonthOnPanel
  } else {
    numberOfDaysNextMonthOnPanel = 35 - numberOfDaysPreviousAndCurrentMonthOnPanel
  }

  const totalDaysOnPanel = numberOfDaysFromPreviousMonthOnPanel + endOfMonth.date() + numberOfDaysNextMonthOnPanel

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
return weeksOnPanel
}
