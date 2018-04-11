import { combineReducers } from 'redux'
import { selectionPeriod } from './selectionPeriod'

let reducers = {
  selectionPeriod,
}

export default combineReducers(reducers)
