import React from 'react'
import SidebarHeadingImage from 'components/left-sidebar/SidebarHeadingImage'
import SidebarHeadingDropdown from 'components/left-sidebar/SidebarHeadingDropdown'
import 'css/elements/sidebar-heading.css'
import 'css/elements/collapsed-sidebar-heading.css'

const SidebarHeading = () => (
  <div className="sidebar-heading sidebar-heading-1 text-center">
    <SidebarHeadingImage />
    <SidebarHeadingDropdown />
  </div>
)
export default SidebarHeading
