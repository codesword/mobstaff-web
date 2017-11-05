import React from 'react'
import PropTypes from 'prop-types'
import 'css/activity-widgets/activity-widget-1.css'

const ActivityWidget = ({items, amount}) => (
  <div className="activity-widget-1">
    <table className="table table-striped table-unbordered">
      <tbody>
        {items.slice(0, amount).map((item, i) => (
          <tr key={i}>
            <td>
              <span
                className={`badge badge-sm badge-${item.badge} badge-outline`}>
                {item.type}
              </span>
            </td>
            <td>{item.title}</td>
            <td>
              <span className="text-xs">{item.date}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

ActivityWidget.defaultProps = {
  amount: 10
}

ActivityWidget.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  amount: PropTypes.number
}

export default ActivityWidget
