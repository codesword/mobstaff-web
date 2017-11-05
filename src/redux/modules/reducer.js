import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {config} from './config'
import {colors, backgroundColors} from './colors'
import {navigation} from './navigation'
import {auth} from './auth'
import {reducer as notificationsReducer} from 'reapop'

const rootReducer = combineReducers({
  config,
  colors,
  backgroundColors,
  navigation,
  auth,
  router: routerReducer,
  notifications: notificationsReducer()
})
export default rootReducer
