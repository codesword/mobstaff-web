import React from 'react'
import {Switch, Route} from 'react-router'

//dashboards
import Dashboard from 'components/Dashboard'
import Login from 'containers/Login'
import Empty from 'containers/Empty'

const Routes = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route component={Empty} />
  </Switch>
)

export default Routes
