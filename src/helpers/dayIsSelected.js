import stringifyMoment from './stringifyMoment'

const dayIsSelected = (day, selectedDayFirst, selectedDaySecond) => (stringifyMoment(selectedDayFirst) === stringifyMoment(day)) 
|| (stringifyMoment(selectedDaySecond) === stringifyMoment(day))

export default dayIsSelected