import { push } from 'react-router-redux'

export default (client) => (
  ({ dispatch, getState }) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState)
      }

      const { promise, types, redirect, ...rest } = action // eslint-disable-line no-redeclare
      if (!promise) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAILURE] = types
      next({...rest, type: REQUEST});
      return promise(client)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText)      
          }
          const contentType = response.headers.get("content-type")
          if(contentType && contentType.includes("application/json")) {
            return response.json();
          }
          const token = response.headers.get("x-auth-token")
          if (token) {
            localStorage.setItem('jwt_token', token)
          }
          return response.text()      
        })
        .then(result => {
          console.log('result here: ', result, ' redirect: ', redirect)
          next({...rest, result, type: SUCCESS})          
          if (redirect) {
            next(push(redirect))
          }
        })
        .catch((error)=> {
          console.error('MIDDLEWARE ERROR:', error);
          next({...rest, error, type: FAILURE});
        })
    }
  }
)