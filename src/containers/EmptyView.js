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
const EmptyView = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.setConfig('layout', 'empty-view')
    }
  })
)

export default EmptyView