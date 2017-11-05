import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import Dashboard from 'components/dashboard/Analytics'

const CollapsedSidebar = compose(
  connect(state => {
    return {
      config: state.config
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.dispatch({
        type: 'SET_CONFIG',
        config: {layout: 'collapsed-sidebar'}
      })
    }
  })
)

export default CollapsedSidebar(Dashboard)
