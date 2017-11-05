import {connect} from 'react-redux'
import {compose, branch, renderComponent, renderNothing} from 'recompose'
import Navbar from 'components/navbar/Navbar'

const layouts = ['default-sidebar', 'collapsed-sidebar']

const Component = compose(
  connect(state => {
    return {
      navigation: state.navigation,
      layout: state.config.layout
    }
  }),
  branch(
    ({layout}) => layouts.includes(layout),
    renderComponent(Navbar),
    renderNothing
  )
)(Navbar)

export default Component
