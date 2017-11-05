import React from 'react'
import PropTypes from 'prop-types'
import LineChart from 'components/line-chart-widgets/LineChart'
import TextWidget from 'components/text-widgets/TextWidget'

const LineChartWidget9 = ({widget, color, height}) => (
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

LineChartWidget9.propTypes = {
  widget: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.number
}

export default LineChartWidget9
