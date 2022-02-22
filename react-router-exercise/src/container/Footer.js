import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <div>
      <nav className="navbar fixed-bottom navbar-light " style={{backgroundColor: "#e3f2fd"}}>
        <div className="container-fluid">
          <Link className="navbar-brand mx-auto" to="/"> KDT5</Link>
        </div>
      </nav>
    </div>
  )
}


