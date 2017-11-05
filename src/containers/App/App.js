import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import history from 'helpers/history'
import NotificationsSystem from 'reapop'
import theme from 'components/notifications/reapop/reapop-theme-bootstrap'
//global css
import 'containers/App/App.css'

//structural elements
import LeftSidebar from 'containers/LeftSidebar'
import Navbar from 'containers/Navbar'

import Routes from 'containers/App/Routes'

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