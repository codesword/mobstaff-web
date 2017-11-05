import React from 'react'
import Logo from 'components/Logo'
import Search from 'components/Navbar/Search'
import ToggleLayout from 'components/Navbar/ToggleLayout'
import ToggleLayoutRight from 'components/Navbar/ToggleLayoutRight'
import DropdownTasks from 'components/Navbar/DropdownTasks'
import DropdownMessages from 'components/Navbar/DropdownMessages'
import DropdownUser from 'components/Navbar/DropdownUser'
import 'components/Navbar/Navbar.css'

const Navbar = ({ config, setConfig, userItems, tasks, notifications }) => (
  <nav className="navbar navbar-1 d-flex justify-content-around align-items-center flex-nowrap">
    <Logo />
    <ToggleLayout config={config} setConfig={setConfig} />
    <ul className="nav nav-inline nav-inline-1">
      <li className="nav-item nav-item-dropdown">
        <a className="nav-link">
          <i className="material-icons">rss_feed</i>
        </a>
        <DropdownTasks tasksForToday={tasks.tasksForToday} tasksForTomorrow={tasks.tasksForTomorrow} />
      </li>
      <li className="nav-item nav-item-dropdown">
        <a className="nav-link nav-link-badge">
          <i className="material-icons">notifications_none</i>
          <span className="badge badge-sm badge-rounded badge-danger">3</span>
        </a>
        <DropdownMessages notifications={notifications}/>
      </li>
    </ul>
    <div className="separator" />
    <Search />
    <ul className="nav nav-inline nav-inline-2">
      <li className="nav-item nav-item-dropdown">
        <a className="nav-link nav-link-avatar">
          <span className="badge badge-sm badge-rounded badge-warning">1</span>
          <img
            src="/assets/faces/m7.png"
            className="rounded-circle"
            alt="avatar"
          />
        </a>
        <DropdownUser items={userItems}/>
      </li>
    </ul>
    <ToggleLayoutRight config={config} setConfig={setConfig} />
  </nav>
)

export default Navbar
