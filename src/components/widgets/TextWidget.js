import React from 'react'
import PropTypes from 'prop-types'
import 'components/widgets/TextWidget.css'

const TextWidget = ({
  bg,
  color,
  align,
  title,
  subtitle,
  percent,
  percentColor,
  padding
}) => (
  <div
    className={`text-widget-1 text-${align} bg-${bg} color-${color} p-${padding}`}>
    <div className="row align-items-center">
      <div className="col align-self-end">
        <span className={`title color-${color}`}>{title}</span>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col align-self-start">
        <div>
          <span className={`subtitle color-${color}`}>{subtitle}</span>
          <span className={`percent color-${percentColor}`}>({percent})</span>
        </div>
      </div>
    </div>
  </div>
)

TextWidget.defaultProps = {
  padding: 10
}

TextWidget.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  percent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  percentColor: PropTypes.string,
  padding: PropTypes.number
}

export default TextWidget
