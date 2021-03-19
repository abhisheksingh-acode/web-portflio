import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = ()=>{

   return (
     <React.Fragment>
     <nav className="navbar navbar-expand-md navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand text-secondary " href="/">ABHISHEK ACODE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact activeClassName="text-info" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="text-info" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="text-info" to="/project">Project</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="text-info" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</React.Fragment>
  
   )
}

export default Nav;