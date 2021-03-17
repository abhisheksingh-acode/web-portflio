import React, { createContext, useEffect, useState } from 'react'
// import ReactDOM from 'react-dom'
import './App.css';
import './index.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
// import AddCircleIcon from '@material-ui/icons/AddCircle';

// import ToDoList from "./ToDo"
// import Ndata from './Netflix';
// import Adata from './Amazon';
// import Card from "./CardItem.js"
// import Heading from "./Heading"
// import Input from "./InputArea"
// import Notes from "./Notes"
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Nav from "./Nav";
import Footer from "./Footer";
import Contact from "./Contact";
import { Redirect, Route,Switch } from 'react-router';


  const App = ()=>{
    return (
      <React.Fragment>
        <Nav />
        <Switch>
        <Route exact path="/" render={Home} />
        <Route exact path="/React-app" render={Home} />
        <Route exact path="/about" render={About} />
        <Route exact path="/project" render={Project} />
        <Route exact path="/Contact" render={Contact} />
        <Redirect to="/" />
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }


export default App;







































































































    // google keep clone project


// const App = ()=>{
//     let [item,setItem] = useState([]);
//   const addItems=(getItem)=>{
//     setItem((preVal)=>{
//         if(getItem.title !== ""){
//        return [...preVal,getItem] }
//        else{
//          alert('string is empty')
//          return [...preVal]
//        }
//       }
//     );
    
//   }
//     const deleteCard = (num)=>{
//         setItem((preVal)=>{
//           return preVal.filter((val,ind)=>{
//             return ind !== num
//           })

//         })
//     }
//   return(
//     <React.Fragment>
//     <Heading />
//     <Input  addEvent={addItems}/>
//     <div className="notes-container container-fluid flex-wrap d-flex ">
//           {item.map((ele,ind)=>{
//             return <Notes key={ind} num={ind} text={ele.title} content={ele.content} removeData={deleteCard}/>
//           })}
//     </div>
//     </React.Fragment>
//   )
// }


      // google keep clone project ends





























          // Bootstrap in React mini card project

// const App =()=>{

//   return(
//         <React.Fragment>
//         <h1 className="text-center text-white bg-danger">Mini Bootstrap card website in React</h1>
//         <div className="flexDiv">
//         <Card url="https://th.bing.com/th/id/OIP.jpLd-_FFm5nktmj6TtNtHAHaFj?pid=ImgDet&rs=1"/>
//         <Card url="https://th.bing.com/th/id/R119c8b0e57f6115a51eff736b282ee49?rik=kQSpPsn3D7ukGA&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f04%2fwallpaper_free_for_iphone.jpg&ehk=Ep8WHBJYilT7wWf7VxxUnuxZKii9z4F9%2b89d7pSwVaY%3d&risl=&pid=ImgRaw" />
//         <Card url="https://th.bing.com/th/id/OIP.jpLd-_FFm5nktmj6TtNtHAHaFj?pid=ImgDet&rs=1" />
//         </div>
//         </React.Fragment>

//   )
// }













              // todo strike project

// const App = ()=>{
//     let [storeItem,setStoreItem] = useState();
//     let [item,setItem] = useState([])

//    const GetData = (event)=>{
//      console.log(event.target.value)

//        return setStoreItem(event.target.value)
//    }

//    const AddItem = ()=>{
//     return setItem((preVal)=>{
//        return [
//          ...preVal,storeItem
//        ]
//      })
//    }
 
//   return(
//     <React.Fragment>
//     <div className="centerDiv">
//      <h2 className="heading">To Do List App</h2>

//  <div className="addInputDiv">
//   <input placeholder="Add Your To Do" onChange={GetData}/>
//      <AddCircleIcon className="addBtn" onClick={AddItem}/>
//      </div>

//      <ol>
//        {item.map((ele,ind)=>{
//          return(
//           <ToDoList key={ind} id={ind} value={ele}/>)
//        })}
//      </ol>
//     </div>
//    </React.Fragment>
//   )
// }
















// const App =()=>{
//       let [init,setInit] = useState(0)
//  const Inc =()=>{
//    console.log('increment');
//     setInit((preVal)=>{
//       return preVal+1
//     })
//  }
//  const Dec =()=>{
//    console.log('decrement');
//    setInit((preVal)=>{
//      if(preVal > 0){
//       return preVal -1 
//      }else{
//       alert("limit exceed")
//       return 0;
//     }
     
//  })}

//   return (
//     <React.Fragment>
    
//     <div className="centerDiv">
//     <h2 className="heading">{init}</h2>
//     <div >
//     <button className="btn" onClick={Inc}>Increment</button>
//     <button className="btn" onClick={Dec}>Decrement</button>
//     </div>
//     </div>
    
//     </React.Fragment>
//   )
// }























        //  todo app project






















// function App(){

//   let [fullName, setFullName] = useState(()=>{
//     return {
//       fname:"",
//       lname:"",
//       email:""
//     }
//   });
//    const GetValue = (event)=>{
//     let {name,value} = event.target ;
//         setFullName((preValue)=>{
//           return {
//             ...preValue,
//           [name]:value
//           }
//         })}

//     const Show = (event)=>{
//       event.preventDefault();
//         alert(`Your form is submitted ${fullName.fname} ${fullName.lname}`)}
//   return(
//     <React.Fragment>

//     <div className="centerDiv">
//     <h1>Hello {fullName.fname} {fullName.lname}</h1>
//     <h3>{fullName.email}</h3>
//     <form onSubmit={Show} >
//     <input type="text" placeholder="Type Your Name" name="fname" autoComplete="off" onChange={GetValue} /> <br />
//     <input type="text" placeholder="Type Your Last Name" name="lname" autoComplete="off" onChange={GetValue} />  <br />
//     <input type="email" placeholder="Type Your Email" name="email" autoComplete="off" onChange={GetValue} />  <br />
//     <button type="submit" className="submit">Submit</button>
//     </form>
//     </div>

//     </React.Fragment>
//   )
// }





























// let styleBtn = {

// event handling while button click

  //   background:"skyblue",
  //   color:"white",
  //   border:"2px solid",
  //   fontSize:"38px",
  //   padding:"10px 20px",
  //   outline:"none"
  // }
  
  // function App(){
//  let color = "pink";
//     let [Ele,Ele2] = useState(color);
//     let [Text,cText] = useState("click me 🙂 ");
//      function Single(){
//      color= "lightskyblue";
//        Ele2(color)
//        cText("double click 😃")
//      }
//      function Double(){
//       color = "pink";
//       Ele2(color);
//       cText("completed task 🤝")
//     }
//   return (
//     <React.Fragment>
//     <div style={{backgroundColor:Ele, width:"100vw", height:"100vh"}} className="root">
//     <button style={styleBtn} onClick={Single} onDoubleClick={Double}>{Text}</button>
//     </div>
//     </React.Fragment>
//   )
// }
















      //  time interval update component

// function App(){
//   let CurrTime = new Date().toLocaleTimeString();
//   const state = useState(CurrTime)
//   let [time,RefTime] = state ;

//   function ReloadTime(){
//   let CurrTime = new Date().toLocaleTimeString();
//   RefTime(CurrTime)
// }
// setInterval(ReloadTime,1000)
// return (

// <React.Fragment>
// <h3 className="timeContainer">{time}</h3>
// </React.Fragment>
// )
// }




























// update time on click function


// function App(){
//   let CurrTime = new Date().toLocaleTimeString();
//   const state = useState(CurrTime)
//   let [time,RefTime] = state ;

//   function ReloadTime(){
//   let CurrTime = new Date().toLocaleTimeString();
//   RefTime(CurrTime)
// }
// return (

// <React.Fragment>
// <h3>{time}</h3>
// <button onClick={ReloadTime}>click</button>
// </React.Fragment>
// )
// }

      //  update time on click function ends




















                      // slot machine project
// let x = "😁";
// let y = "😍";
// let z = "😱";
// function SlotRow(props){

//     if((props.x===props.y) && (props.y===props.z)){
//       return(

//         <div style={{background:"lightgreen"}}>
//         {props.x}{props.y}{props.z}
//         <h4 style={{fontSize:'18px', color:"red"}}>Slot is matching</h4>
//         </div>
//      )
//     }else{
//       return(
//         <div  style={{background:"red"}}>
//         {props.x}{props.y}{props.z}
//         <h4 style={{fontSize:'18px', color:"white"}}>Slot is not matching</h4>
//         </div>
//      )
//     }

//   }

// function GameTitle(){
//   return(
//     <React.Fragment>
//     <h1 style={{background:"lightskyblue", textAlign:"center", padding:"5px 0"}}>🎰 Slot machine game 🎰</h1>

//     <div className="centerDiv">
//     <SlotRow x={x} y={z} z={y} />
//     <SlotRow x={y} y={y} z={y} />
//     <SlotRow x={x} y={x} z={x} />
//     <SlotRow x={z} y={y} z={z} />
//     </div>
//     </React.Fragment>
//   )
// }


// function App(){
//   return(
//     <React.Fragment>
//     <GameTitle />
//     </React.Fragment>
//   )
// }

// export default App;

































                // netflix card project

