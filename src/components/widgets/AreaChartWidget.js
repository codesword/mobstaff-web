import React from 'react'
import PropTypes from 'prop-types'
import AreaChart from 'components/AreaChart'
import TextWidget from 'components/widgets/TextWidget'

const AreaChartWidget = ({widget, color, height}) => (
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
        <AreaChart color={color} height={height} data={widget.data} />
      </div>
    </div>
  </div>
)

AreaChartWidget.propTypes = {
  widget: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.number
}

export default AreaChartWidget
