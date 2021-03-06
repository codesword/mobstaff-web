import React from 'react'
import {random} from 'helpers/functions'
import DashboardWidget from 'components/DashboardWidget'
import BarChartWidget from 'components/widgets/BarChartWidget'
import AreaChartWidget from 'components/widgets/AreaChartWidget'
import LineChartWidget from 'components/widgets/LineChartWidget'

const chartData = () => {
  let data = []
  for (let i = 0; i < 20; i++) {
    data.push({name: 'Serie ' + (i + 1), x: random(20, 90)})
  }
  return data
}

const widgets = [
  {
    color: 'info',
    height: 60,
    widget: {
      bg: 'transparent',
      color: 'default',
      subtitle: 'Users',
      title: '4,412',
      percent: '+5%',
      percentColor: 'success',
      align: 'left',
      padding: 0,
      data: chartData()
    }
  },
  {
    color: 'success',
    height: 60,
    widget: {
      bg: 'transparent',
      color: 'default',
      subtitle: 'Profit',
      title: '$9,876',
      percent: '-2.5%',
      percentColor: 'danger',
      align: 'left',
      padding: 0,
      data: chartData()
    }
  },
  {
    color: 'warning',
    height: 60,
    widget: {
      bg: 'transparent',
      color: 'default',
      subtitle: 'Orders',
      title: '578',
      percent: '+15.2%',
      percentColor: 'success',
      align: 'left',
      padding: 0,
      data: chartData()
    }
  },
  {
    color: 'danger',
    height: 60,
    widget: {
      bg: 'transparent',
      color: 'default',
      subtitle: 'Sales',
      title: '154',
      percent: '-4%',
      percentColor: 'danger',
      align: 'left',
      padding: 0,
      data: chartData()
    }
  }
]

const Section1 = () => (
  <DashboardWidget title="Dashboard stats" description="This week">
    <div className="row">
      <div className="col-12 col-sm-6 col-lg-3 m-b-10">
        <BarChartWidget {...widgets[0]} />
      </div>
      <div className="col-12 col-sm-6 col-lg-3 m-b-10">
        <AreaChartWidget {...widgets[1]} />
      </div>
      <div className="col-12 col-sm-6 col-lg-3 m-b-10">
        <LineChartWidget {...widgets[2]} />
      </div>
      <div className="col-12 col-sm-6 col-lg-3 m-b-10">
        <BarChartWidget {...widgets[3]} />
      </div>
    </div>
  </DashboardWidget>
)
export default Section1
