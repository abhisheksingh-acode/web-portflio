
import React,{useState} from "react"
import AddCircleIcon from '@material-ui/icons/AddCircle'

const Input = (props)=>{
      let [getItem,setGetItem] = useState({     
            title:"",
            content:""       
      });
      let [hide,setHide] = useState(true);
      
      const GetData = (event)=>{
         let {name,value} = event.target;
            setGetItem((preVal)=>{
               return {
                  ...preVal,[name]:value
               }
            })
      }

      const addItem = ()=>{
       props.addEvent(getItem)
         setGetItem({     
            title:"",
            content:""       
      });
        Hide()
      }

      const Show = ()=>{
         setHide(false)
      }
      const Hide = ()=>{
         setHide(true)
      }

   return (
      <React.Fragment>
      <div class='input-area bg-white my-3 rounded' >
      <input type="text" style={{display:hide?"none":"block"}} name="title" placeholder="Title" autoComplete="off" className="w-100 font-weight-bold" onChange={GetData} value={getItem.title} />
      <div >
      <textarea name="content" style={{height:hide?"50px":"100px"}} placeholder="type your text..." className="w-100 px-4" onChange={GetData} value={getItem.content} onClick={Show}/>
      <div className="text-right "><AddCircleIcon className=" add-radius" onClick={addItem}/></div>
      </div>
      </div>
      
      </React.Fragment>
   )
}




export default Input;