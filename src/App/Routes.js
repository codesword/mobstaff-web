import React from 'react'
import {Switch, Route} from 'react-router'

//dashboards
import Analytics from 'components/dashboard'
import Login from 'pages/login'
import EmptyPage from 'pages/empty-page'

const Routes = () => (
  <Switch>
    <Route path="/dashboards" component={Analytics} />
    <Route path="/login" component={Login} />
    <Route component={EmptyPage} />
  </Switch>
)

export default Routes
