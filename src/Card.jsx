
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Card= (props)=>{


   return (
      <React.Fragment>
      <div className="card mx-2 my-4" style={{width: "18rem"}} >
  <img src={props.imgsrc} className="card-img-top img-fluid" alt="{props.imgsrc}" />
  <div className="card-body" >
  <h5 className="text-center">{props.title}</h5>
    
    <div className="d-flex justify-content-center" >
    <a href={props.link} className="btn btn-hover border-secondary mx-1" target="_blank">Live</a>
    <a href={props.source} className="btn btn-hover border-secondary mx-1" target="_blank">Source</a>
    </div>
  </div>
</div>
      </React.Fragment>
   )
}

export default Card;