import React from 'react';

function Common(props){
   let style = "col-8 text-justify textDiv h-100 d-flex align-items-center justify-content-center";
   return(
      <React.Fragment>
       <div className="container row LandingPage w-100">
         <div className={` col-8  ${style}`}>
          <div>
          <h1 >WELCOME TO {props.title} PAGE</h1>
          <h2>Keep visiting and rating us</h2>
          <h1 className="text-info">ABHISHEK ACODE</h1>
          </div>
         </div>
         <div className="col-4 d-flex align-items-center">
         <img src={props.imgsrc} alt="mainlogo" className="img-fluid" />
         </div>
       </div>
       </React.Fragment>
       )
}

export default Common;