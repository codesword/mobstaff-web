import React from 'react'
import {Link} from 'react-router-dom'
import 'components/Logo/Logo.css'

const Logo = () => (
  <Link
    to="/"
    className="logo d-flex justify-content-start align-items-center flex-nowrap">
    <i className="fa fa-code" />
    <span className="title">MobStaff</span>
  </Link>
)

export default Logo
