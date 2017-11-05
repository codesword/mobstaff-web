import React from 'react'
import Task from './Task'
import 'components/Navbar/DropdownTasks/DropdownTasks.css'

const DropdownTasks = ({tasksForToday, tasksForTomorrow}) => (
  <div className="navbar-dropdown dropdown-tasks">
    <div className="dropdown-inner">
      <div className="dropdown-title">7 pending tasks</div>
      <h6 className="dropdown-header">Today</h6>
      {tasksForToday.map((task, i) => <Task key={i} {...task} />)}
      <h6 className="dropdown-header">Tomorrow</h6>
      {tasksForTomorrow.map((task, i) => <Task key={i} {...task} />)}
    </div>
  </div>
)

export default DropdownTasks
