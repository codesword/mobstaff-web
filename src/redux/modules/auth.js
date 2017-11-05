import { validateAll } from './common'
import { push } from 'react-router-redux'

const LOAD = 'mobstaff-webauth/LOAD';
const LOAD_SUCCESS = 'mobstaff-web/auth/LOAD_SUCCESS';
const LOAD_FAIL = 'mobstaff-web/auth/LOAD_FAIL';
const LOGIN = 'mobstaff-web/auth/LOGIN';
const LOGIN_SUCCESS = 'mobstaff-web/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'mobstaff-web/auth/LOGIN_FAIL';
const LOGOUT = 'mobstaff-web/auth/LOGOUT';
const LOGOUT_SUCCESS = 'mobstaff-web/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'mobstaff-web/auth/LOGOUT_FAIL';


const initialState = {
  valid: false,
  loading: false,
  isAuthenticated: localStorage.getItem('jwt_token') ? true : false,  
  user: null,
  fields: [
    {
      value: '',
      name: 'email',
      icon: 'account_circle',
      type: 'text',
      errors: [],
      rules: {
        title: 'Your email',
        required: true
      }
    },
    {
      value: '',
      name: 'password',
      icon: 'lock_outline',
      type: 'password',
      errors: [],
      rules: {
        title: 'Your password',
        required: true
      }
    }
  ]
};

export function auth(state = initialState, action = {}) {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          loading: true,
          isAuthenticated: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          error: action.error
        };
      case 'VALIDATE':
        let fields = state.fields.map(item => {
          if (item.name === action.field.name) {
            return action.field
          } else {
            return item
          }
        })
        let valid =
          fields.filter(field => field.errors.length > 0).length > 0
            ? false
            : true
        return Object.assign({}, state, {
          valid: valid,
          fields: Array.from(fields)
        })
      case 'VALIDATE_ALL':
        valid =
          action.fields.filter(field => field.errors.length > 0).length > 0
            ? false
            : true
        return Object.assign({}, state, {
          valid: valid,
          fields: Array.from(action.fields)
        })
      default:
        return state
    }
  }
  

  export function isLoaded(globalState) {
    return globalState.auth && globalState.auth.loaded;
  }
  
  export function load() {
    return {
      types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
      promise: (client) => client('/v1/users/current/details')
    };
  }
  
  export function login(email, password) {
    const config = {
      method: 'POST',
      body: { email, password }
    }
    return {
      types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
      promise: (client) => client.post('/login', config),      
      redirect: '/dashboard',
    };
  }

  export function logout() {
    return dispatch => {
      try {
        dispatch({ type: LOGOUT })
        localStorage.removeItem('jwt_token')
        dispatch({ type: LOGOUT_SUCCESS })
        dispatch(push('/login'))
      } catch (err) {
        dispatch({ type: LOGOUT_FAIL })  
      }
    }
  }
  

  export function submit(fields) {
    console.log(fields)
    return (dispatch, getState) => {
      dispatch(validateAll(fields))
      if (getState().auth.valid) {
        const email = fields[0].value
        const password = fields[1].value
        return dispatch(login(email, password))
      }
    }
  }