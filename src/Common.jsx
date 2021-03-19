import React from 'react';

function Common(props){
   return(
      <React.Fragment>
       <div className="container-fluid row w-100 h-100 ">
         <div className="col-lg-8 col-md-8 col-sm-12 order-md-0 order-sm-1 order-1 common-resp">
          <div>
          <h1 >WELCOME TO {props.title} PAGE</h1>
          <h2>Keep visiting and rating us</h2>
          <h1 className="text-info">ABHISHEK ACODE</h1>
          </div>
         </div>
         <div className="col-lg-4 col-md-4 col-sm-12 order-sm-0 order-md-1 order-0 common-resp">
         <img src={props.imgsrc} alt="mainlogo" className="img-fluid" />
         </div>
       </div>
       </React.Fragment>
       )
}

export default Common;