import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const addState = store => next => action =>
  next(Object.assign({}, action, {
    currentState: store.getState(),
  }))

const middleware = [
  addState,
  thunk,
]

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware),
))

export default store
