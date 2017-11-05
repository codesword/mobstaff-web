import React from 'react'
import SidebarHeadingImage from 'components/LeftSidebar/SidebarHeading/SidebarHeadingImage'
// import SidebarHeadingDropdown from 'components/LeftSidebar/SidebarHeading/SidebarHeadingDropdown'
import 'components/LeftSidebar/SidebarHeading/SidebarHeading.css'
import 'components/LeftSidebar/SidebarHeading/CollapsedSidebarHeading.css'

const SidebarHeading = () => (
  <div className="sidebar-heading sidebar-heading-1 text-center">
    <SidebarHeadingImage />
    {/* <SidebarHeadingDropdown /> */}
  </div>
)
export default SidebarHeading
