import React from 'react';
import {NavLink} from 'react-router-dom'

function Common(props){
   return(
      <React.Fragment>
       <div className="container-fluid bg-light row d-flex align-items-center flex-wrap p-0 w-100 h-100 mx-auto">
         <div className="common-resp justify-content-start justify-content-sm-center mx-0 col-md-6 col-sm-6 order-1 order-lg-0 order-md-0">
          <h1 className="text-center">WELCOME TO {props.title} PAGE</h1>
          <h1 className="text-info">ABHISHEK ACODE</h1>
          <p>Keep visiting and rating us</p>
          <NavLink to="/project" className="btn btn-dark rounded-pill checkout-btn">check out</NavLink>
         </div>
         <div className="common-resp justify-content-end justify-content-sm-end img-con mx-0 col-md-6 col-sm-6 order-sm-1 order-0">
         <img src={props.imgsrc} alt="mainlogo" className="common-img" />
         </div>
       </div>
       </React.Fragment>
       )
}

export default Common;