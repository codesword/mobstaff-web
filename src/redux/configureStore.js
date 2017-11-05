import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import api from './middleware/api'
import rootReducer from './modules/reducer'

export default function configureStore(history, client) {
  const reduxRouterMiddleware = routerMiddleware(history);
  const middlewares = [api(client), reduxRouterMiddleware, thunk]
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules/reducer', () => {
      const nextRootReducer = require('./modules/reducer')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

