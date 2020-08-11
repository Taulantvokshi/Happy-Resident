import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import navigation from './navigation'
import alerts from './alerts'
import account from './account'
import assistance from './assiaistance'
import archives from './archives'

const reducer = combineReducers({
  user,
  navigation,
  alerts,
  account,
  assistance,
  archives
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)
export default store
export * from './user'
