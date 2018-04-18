const dayIsOnSelectedSlot = (day, selectedDayFirst, selectedDaySecond) => day.isBefore(selectedDaySecond) && day.isAfter(selectedDayFirst)

export default dayIsOnSelectedSlot