import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Card from "./Card";
import Sdata from './Sdata'
function Project(){
  
   console.log(Sdata[1].img);
 
   return (
      <React.Fragment>
      <h1 className="text-center text-secondary my-3">PROJECTS</h1>
      <div className="container-fluid mx-auto d-flex justify-content-md-center justify-content-center flex-wrap my-5">
       {Sdata.map((val,ind)=>{
          return <Card key={ind} id={ind} source={val.git} link={val.live} imgsrc={val.img}  title={val.title} live={val.git} />
       })}
       </div>
      </React.Fragment>
   )
}

export default Project;