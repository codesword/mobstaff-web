import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'

const EmptyView = compose(
  connect(state => {
    return {
      config: state.config
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.dispatch({
        type: 'SET_CONFIG',
        config: {layout: 'empty-view'}
      })
    }
  })
)

export default EmptyView