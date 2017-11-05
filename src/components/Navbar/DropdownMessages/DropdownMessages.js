import React from 'react'
import 'components/Navbar/DropdownMessages/DropdownMessages.css'

const DropdownMessages = ({notifications}) => (
  <div className="navbar-dropdown dropdown-messages">
    <div className="dropdown-inner">
      <div className="dropdown-title">5 pending notifications</div>
      {notifications.map((notification, i) => (
        <div className="dropdown-item" key={i}>
          <p>
            <span className="date">{notification.date}</span>
          </p>
          <p>
            <span
              className={`badge badge-sm badge-outline badge-${notification.badge}`}>
              {notification.type}
            </span>
            <span className="separator" />
            <span className="title">{notification.title}</span>
          </p>
        </div>
      ))}
    </div>
  </div>
)

export default DropdownMessages
