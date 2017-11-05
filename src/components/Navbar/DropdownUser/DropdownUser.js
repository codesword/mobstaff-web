import React from 'react'
import 'components/Navbar/DropdownUser/DropdownUser.css'

const DropdownUser = ({items}) => (
  <div className="navbar-dropdown dropdown-user">
    <div className="dropdown-title">My account</div>
    {items.map((item, i) => (
      <div className="dropdown-item" key={i}>
        <i className={item.icon} />
        <span className="title">{item.name}</span>
        <div className="separator" />
        {item.badge && (
          <span className={item.badgeClass}>{item.badgeText}</span>
        )}
      </div>
    ))}
  </div>
)

export default DropdownUser
