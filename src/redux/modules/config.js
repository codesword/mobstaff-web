const SET_CONFIG = 'mobstaff-web/config/SET_CONFIG';
const SET_LAYOUT = 'mobstaff-web/config/SET_LAYOUT';

const initialState = {
  layout: 'default-sidebar',
  background: 'light',
  navbar: 'light',
  topNavigation: 'light',
  logo: 'dark',
  leftSidebar: 'light',
  leftSidebarIcons: 'dark',
  rightSidebar: false,
  collapsed: false
}

export function config(state = initialState, action) {
  switch (action.type) {
    case SET_CONFIG:
      return Object.assign({}, state, {
        ...action.config
      })
    default:
      return state
  }
}

export function setConfig(key, value) {
  let config = {
    [key]: value
  }
  return {
    type: SET_CONFIG,
    config
  }
}
export function setLayout(layout) {
  return {
    type: SET_LAYOUT,
    layout
  }
}
