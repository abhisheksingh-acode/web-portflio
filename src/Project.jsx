import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Card from "./Card";
import Sdata from './Sdata'
function Project(){
  
   console.log(Sdata[1].img);
 
   return (
      <React.Fragment>
      <h1 className="text-center text-black-50">Thank you for visiting</h1>
      <div className="w-75 mx-auto d-flex justify-content-md-start justify-content-center flex-wrap">
       {Sdata.map((val,ind)=>{
          return <Card key={ind} id={ind} source={val.git} link={val.live} imgsrc={val.img}  title={val.title} live={val.git} />
       })}
       </div>
      </React.Fragment>
   )
}

export default Project;