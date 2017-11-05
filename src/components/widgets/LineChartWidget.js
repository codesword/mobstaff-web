import React from 'react'
import PropTypes from 'prop-types'
import LineChart from 'components/LineChart'
import TextWidget from 'components/widgets/TextWidget'

const LineChartWidget = ({widget, color, height}) => (
  <div className="line-chart-widget-9">
    <div className="row align-items-center justify-content-center m-b-10">
      <div className="col">
        <div className="p-10">
          <TextWidget {...widget} />
        </div>
      </div>
    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <LineChart color={color} height={height} data={widget.data} />
      </div>
    </div>
  </div>
)

LineChartWidget.propTypes = {
  widget: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.number
}

export default LineChartWidget
