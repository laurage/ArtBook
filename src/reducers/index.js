import { combineReducers } from 'redux'
import { selectionReducer } from './selectionReducer'

let reducers = {
  selection: selectionReducer,
}

export default combineReducers(reducers)
