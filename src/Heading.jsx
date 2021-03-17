import React from "react";
import NoteIcon from '@material-ui/icons/Note';

const Heading = ()=>{
   
  return(
   <React.Fragment>
     <div className="container-fluid bg-warning">
       <h1 className="text-left mx-2 p-2 text-white"><NoteIcon style={{fontSize:"30px"}}/> Keep Note</h1>
     </div>
   </React.Fragment>
 )
}


export default Heading;