import React from 'react'
import Section1 from 'components/dashboard/Section1'
import Section2 from 'components/dashboard/Section2'
import Section3 from 'components/dashboard/Section3'

const Dashboard = () => (
  <div>
    <Section1 />
    <div className="row">
      <div className="col-12 col-md-12 col-xl-6">
        <Section2 />
      </div>
      <div className="col-12 col-md-12 col-xl-6">
        <Section3 />
      </div>
    </div>
  </div>
)
export default Dashboard