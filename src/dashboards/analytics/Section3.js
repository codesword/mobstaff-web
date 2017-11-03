import React from 'react'
import Widget from '../../elements/DashboardWidget'
import ActivityWidget from '../../activity-widgets/ActivityWidget'
import sales from '../../json/sales-2.json'

const Section3 = () => (
  <Widget title="Sales stream" description="Latest sales and customer actions">
    <ActivityWidget items={sales} amount={6} />
  </Widget>
)
export default Section3
