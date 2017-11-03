import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import history from './history'
import NotificationsSystem from 'reapop'
import theme from './notifications/reapop/reapop-theme-bootstrap'
import './css/icons/material-design-icons.css'
import './css/icons/simple-line-icons.css'


//global css
import './css/bootstrap/bootstrap.css'
import './css/main.css'

//structural elements
import LeftSidebar from './elements/left-sidebar'
import Navbar from './elements/navbar'

import Routes from './Routes'

class App extends Component {
  render() {
    let {
      layout,
      background,
      navbar,
      topNavigation,
      logo,
      leftSidebar,
      collapsed
    } = this.props.config
    let isEmptyView = layout === 'empty-view' ? true : false
    return (
      <ConnectedRouter history={history}>
        <div
          data-layout={layout}
          data-background={background}
          data-navbar={navbar}
          data-top-navigation={topNavigation}
          data-logo={logo}
          data-left-sidebar={leftSidebar}
          data-collapsed={collapsed}>
          <NotificationsSystem theme={theme} />
          <Navbar />
          <div className={isEmptyView ? '' : 'container-fluid'}>
            <div className={isEmptyView ? '' : 'row'}>
              <LeftSidebar />
              <div className="col main">
                <Routes />
              </div>
            </div>
          </div>
        </div>
      </ConnectedRouter>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    config: state.config
  }
}
export default connect(mapStateToProps)(App)