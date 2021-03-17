import React from "react" ;
import DeleteIcon from '@material-ui/icons/Delete';

const Notes = (props)=>{

   const removeItem=()=>{
      props.removeData(props.num);
      
   }
   return (
      <React.Fragment>

      <div className="notes bg-white mx-2 rounded my-3 p-2" >
      <p className="title-out font-weight-bold text-center">{props.text}</p>
      <p className="content-out">{props.content}</p>
      <div className="delete-div text-right "> <DeleteIcon className="delete-btn" 
      onClick={removeItem}/></div>
      </div>
      </React.Fragment>
   )
}





export default Notes;