import React from 'react'
import {NavLink} from 'react-router-dom'


const Nav = ()=>{

   return (
     <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <NavLink className="navbar-brand p-3 mx-2" to="/">ABHISHEK ACODE</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item ">
     <NavLink activeClassName="text-info" exact to="/" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="text-info" exact to="/about" className="nav-link" >About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="text-info" exact to="/project" className="nav-link" >Project</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="text-info" exact to="/contact" className="nav-link" >Contact</NavLink>
      </li>
     
    </ul>
    </div>
</nav>
</React.Fragment>
  
   )
}

export default Nav;