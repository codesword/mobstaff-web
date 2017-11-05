import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from 'redux/configureStore'
import App from 'App'
import history from './history'
import ApiClient from 'helpers/ApiClient'
import registerServiceWorker from './registerServiceWorker';

const client = new ApiClient()
const store = configureStore(history, client)
//store.subscribe(() => console.log('state', store.getState()));

const Component = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

let render = () => {
  ReactDOM.render(<Component />, document.getElementById('root'))
}
render()
if (module.hot) {
  module.hot.accept(Component => {
    render()
  })
}
registerServiceWorker();
