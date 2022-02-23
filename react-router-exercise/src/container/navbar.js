import React from 'react'
import { NavLink } from 'react-router-dom'


export default function navbar(){
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd" ,height:'70px'}}>
    <div className="container ">
      <NavLink className="navbar-brand" to="/"><b>KDT5</b></NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav  ms-auto">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/compo1">Compo1</NavLink>
          <NavLink className="nav-link" to="/compo2">Compo2</NavLink>
          <NavLink className="nav-link" to="/compo3">Compo3</NavLink>
          <NavLink className="nav-link" to="/menu1">Menu1</NavLink>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
