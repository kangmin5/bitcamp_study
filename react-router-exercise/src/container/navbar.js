import React from 'react'
import { Link } from 'react-router-dom'


export default function navbar(){
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd" ,height:'70px'}}>
    <div className="container">
      <Link className="navbar-brand" to="/">KDT5</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          <Link className="nav-link" to="/compo1">Compo1</Link>
          <Link className="nav-link" to="/compo2">Compo2</Link>
          <Link className="nav-link" to="/compo3">Compo3</Link>
          <Link className="nav-link" to="/menu1">Menu1</Link>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
