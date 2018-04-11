export const initialState = {
  selectedDay: null,
}

export const selectionPeriod = (state = initialState, { type, selectedDay } = {}) => {
  if (!type) return state
  switch (type) {
    case 'SET_SELECTED_DAY':
      return Object.assign({}, state, {
        selectedDay
      })
    default:
      return state
  }
}
