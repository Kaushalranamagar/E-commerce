import { useState, useEffect  } from "react";
import Text from "./Text";
//useCallback, useMemo,useReducer,useRef, useId

export default function Button(props){
    
   const  [ state, setState] = useState("");
const  [count, setCount] = useState(0);

let name = "Kaushal"
//const [value, setValue] = useState(0);
useEffect(()=>{
  console.log("use-effect");
  return ()=> {
    console.log("use-effect-cleanup");
  };
},[]);

useEffect(()=>{
  console.log("use-effect => change in state");
  
},[count,state]);


//function checkWeather()
//{
    //api tasks 4-5 seconds
//}

   // let a = 1;

  function handleClick(){

      //   alert("clicked")
    
setCount(prev=>{ return prev+1})
//a = a + 1;

    setCount(prev=>{return prev + 1})
     
    setState("new value");


    //  setCount(count +1)
      //   setCount(count +1)
     // console.log("handle clicked")
     console.log({count})
    }
    //console.log({a})
    //useEffect(cb,dependencies)
    /* useEffect(()=>{
       console.log("inside useEffect");
        return ()=> {
         console.log("clean up -unmounted")
      };
    },[]) */


/*     useEffect(()=>{
        console.log("change in  count state");
        
     },[count,value])
 */
   
   // console.log(state)

   console.log("render...");

function handleChange()
{
  console.log("handle change....");
  name ="Changed"
}

console.log(props.title);
//<button>
//</button>
return(   
 <Text setState = {setState} title = {props.title} />
 
)


  return(
        <>
{/*         <p>a : {a} </p>
 */}        {/* {state}
 */}       <h1> {count} </h1>
        <button onClick={handleClick} type="button">
            {props.type} Button
        </button>
{/*         <input onChange = {(e)=> {setValue(e.target.value)}} /> */}        

{/*  <input value ={state} onChange ={() => setState("new value")} /> 
 */} 
 <h1>{name}</h1>

  <input value ={state} onChange = {function (){ setState("new value")}} />       
  <input  value={state} onChange = {()=> handleChange()} />        
 
       
       </>
    )
}