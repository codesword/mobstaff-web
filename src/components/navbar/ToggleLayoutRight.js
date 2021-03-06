import React from 'react'

class ToggleLayoutRight extends React.Component {
  constructor() {
    super()
    this.toggleLayout = this.toggleLayout.bind(this)
  }
  toggleLayout() {
    let {collapsed} = this.props.config
    this.props.setConfig('collapsed', !collapsed)
  }
  render() {
    return (
      <ul className="nav nav-inline nav-toggle-layout-2">
        <li className="nav-item">
          <a className="nav-link toggle-layout" onClick={this.toggleLayout}>
            <i className="sli-menu" />
          </a>
        </li>
      </ul>
    )
  }
}
export default ToggleLayoutRight