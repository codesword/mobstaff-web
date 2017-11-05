import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import {setConfig} from 'redux/modules/config'

const mapStateToProps = (state, ownProps) => {
  return {
    config: state.config
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setConfig: (key, value) => dispatch(setConfig(key, value))    
  }
}

const StoredLayout = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      let layout = this.props.config.layout
      if (layout === 'home' || layout === 'empty-view') {
        layout = 'default-sidebar'
      }
      this.props.setConfig('layout', layout)
    }
  })
)

export default StoredLayout
