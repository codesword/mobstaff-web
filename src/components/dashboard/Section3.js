import React from 'react'
import DashboardWidget from 'components/DashboardWidget'
import ActivityWidget from 'components/activity-widgets/ActivityWidget'
import sales from 'json/sales-2.json'

const Section3 = () => (
  <DashboardWidget title="Sales stream" description="Latest sales and customer actions">
    <ActivityWidget items={sales} amount={6} />
  </DashboardWidget>
)
export default Section3
