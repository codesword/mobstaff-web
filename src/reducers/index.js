import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {config} from './config'
import {colors, backgroundColors} from './colors'
import {navigation} from './navigation'
import {login} from './pages/login'
import {reducer as notificationsReducer} from 'reapop'

const rootReducer = combineReducers({
  config,
  colors,
  backgroundColors,
  navigation,
  login,
  router: routerReducer,
  notifications: notificationsReducer()
})
export default rootReducer
