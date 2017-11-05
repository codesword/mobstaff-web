import React from 'react'

class ToggleLayout extends React.Component {
  constructor() {
    super()
    this.toggleLayout = this.toggleLayout.bind(this)
  }
  toggleLayout() {
    let {layout} = this.props.config
    if (layout === 'default-sidebar') {
      this.props.setConfig('layout', 'collapsed-sidebar')
    } else {
      this.props.setConfig('layout', 'default-sidebar')
    }
    this.props.setConfig('collapsed', false)
  }
  render() {
    return (
      <ul className="nav nav-inline nav-toggle-layout-1">
        <li className="nav-item">
          <a className="nav-link toggle-layout" onClick={this.toggleLayout}>
            <i className="sli-menu" />
          </a>
        </li>
      </ul>
    )
  }
}

export default ToggleLayout
