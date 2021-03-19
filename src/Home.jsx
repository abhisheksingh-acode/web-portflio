import React from 'react';
import Common from './Common';
import Project from "./Project";
import Contact from "./Contact";
import pic from './images/landing.png'

function Home(){
   return(
      <React.Fragment>
       <Common title="HOME" imgsrc={pic}/>
       </React.Fragment>
       )
}

export default Home;