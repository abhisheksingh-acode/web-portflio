import React from 'react';
import Common from './Common';
import pic from './images/image1.png'

function Home(){
   return(
      <React.Fragment>
       <Common title="HOME" imgsrc={pic}/>
       </React.Fragment>
       )
}

export default Home;