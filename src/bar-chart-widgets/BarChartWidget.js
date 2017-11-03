import React from 'react'
import PropTypes from 'prop-types'
import BarChart from './BarChart'
import TextWidget from '../text-widgets/TextWidget'

const BarChartWidget = ({widget, color, height}) => (
  <div className="bar-chart-widget-9">
    <div className="row align-items-center justify-content-center m-b-10">
      <div className="col">
        <div className="p-10">
          <TextWidget {...widget} />
        </div>
      </div>
    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <BarChart color={color} height={height} data={widget.data} />
      </div>
    </div>
  </div>
)

BarChartWidget.propTypes = {
  widget: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.number
}

export default BarChartWidget
