export const initialState = {
  selectedDayFirst: null,
  selectedDaySecond: null,
}
// TODO: if change month panel, selected days still good (see redux tools) but selected day not shown in UI
export const selectionPeriod = (state = initialState, { type, selectedDay } = {}) => {
  if (!type) return state
  switch (type) {
    case 'SET_SELECTED_DAY':
      if (state.selectedDayFirst && selectedDay.isSame(state.selectedDayFirst)) {
        return Object.assign({}, state, {
          selectedDayFirst: null,
        })
      } else if (state.selectedDaySecond && selectedDay.isSame(state.selectedDaySecond)) {
        return Object.assign({}, state, {
          selectedDaySecond: null,
        })
      } else if (state.selectedDayFirst === null && (state.selectedDaySecond && selectedDay.isAfter(state.selectedDaySecond))) { // if user clicked on 1st date and then selects a day after the last date selected
        return Object.assign({}, state, {
          selectedDayFirst: state.selectedDaySecond,
          selectedDaySecond: selectedDay,
        })
      } else if (state.selectedDayFirst === null || (state.selectedDayFirst && selectedDay.isBefore(state.selectedDayFirst))) { // if no date has been selected yet, or first date has been selected and user then selects a date before that date
        return Object.assign({}, state, {
          selectedDayFirst: selectedDay,
        })
      } else {
        return Object.assign({}, state, {
          selectedDaySecond: selectedDay,
        })
      }
    default:
      return state
  }
}
