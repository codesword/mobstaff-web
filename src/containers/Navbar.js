import {connect} from 'react-redux'
import {compose, branch, renderComponent, renderNothing} from 'recompose'
import {setConfig} from 'redux/modules/config'
import {random} from 'helpers/functions'
import Navbar from 'components/Navbar/Navbar'

const layouts = ['default-sidebar', 'collapsed-sidebar']
const userItems = [
  {
    icon: 'sli-envelope',
    iconColor: 'default',
    name: 'Inbox',
    badge: true,
    badgeText: 'New',
    badgeClass: 'badge badge-pill badge-raised badge-danger badge-sm'
  },
  {
    icon: 'sli-star',
    iconColor: 'default',
    name: 'Messages',
    badge: true,
    badgeText: '5',
    badgeClass: 'badge badge-info badge-rounded badge-sm'
  },
  {
    icon: 'sli-settings',
    iconColor: 'default',
    name: 'Profile',
    badge: false,
    badgeText: false,
    badgeClass: false
  },
  {
    icon: 'sli-clock',
    iconColor: 'default',
    name: 'Lock screen',
    badge: false,
    badgeText: false,
    badgeClass: false
  },
  {
    icon: 'sli-power',
    iconColor: 'default',
    name: 'Logout',
    badge: false,
    badgeText: false,
    badgeClass: false
  }
]

let tasksForToday = [
  {
    title: 'Mobile app development',
    color: 'secondary',
    value: random(50, 90)
  },
  {
    title: 'Deploy github project',
    color: 'info',
    value: random(50, 90)
  }
]

let tasksForTomorrow = [
  {
    title: 'Customer development',
    color: 'success',
    value: random(50, 90)
  },
  {
    title: 'Database backup',
    color: 'warning',
    value: random(50, 90)
  },
  {
    title: 'Release beta version',
    color: 'danger',
    value: random(50, 90)
  }
]

let notifications = [
  {
    badge: 'success',
    type: 'sale',
    title: 'Michael Smith upgraded to the $50 plan',
    date: '4 minutes ago'
  },
  {
    badge: 'danger',
    type: 'return',
    title: 'Lucas Johnson cancelled the $50 plan',
    date: '34 minutes ago'
  },
  {
    badge: 'warning',
    type: 'refund',
    title: 'Jane Smith is asking for a refund',
    date: '2 hours ago'
  },
  {
    badge: 'success',
    type: 'sale',
    title: 'George Lucas upgraded to the $25 plan',
    date: '3 hours ago'
  },
  {
    badge: 'primary',
    type: 'new',
    title: 'Andrew Peters is looking for a new plan',
    date: '4 hours ago'
  }
]

const mapStateToProps = (state, ownProps) => {
  return {
    userItems,
    notifications,
    tasks: { tasksForTomorrow, tasksForToday },
    config: state.config,
    navigation: state.navigation,
    layout: state.config.layout
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setConfig: (key, value) => dispatch(setConfig(key, value))    
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  branch(
    ({layout}) => layouts.includes(layout),
    renderComponent(Navbar),
    renderNothing
  )
)(Navbar)
