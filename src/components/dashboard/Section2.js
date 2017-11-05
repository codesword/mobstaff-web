import React from 'react'
import DashboardWidget from 'components/DashboardWidget'
import AreaChart from 'components/dashboard/AreaChart'

const Section2 = () => (
  <DashboardWidget title="Sales" description="Weekly sales performance">
    <div className="row">
      <div className="col">
        <AreaChart />
      </div>
    </div>
  </DashboardWidget>
)
export default Section2
