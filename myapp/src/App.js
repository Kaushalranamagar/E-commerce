//import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';
import Button from './component/Button';
import ButtonClass from './component/ButtonClass';
import {useState} from "react"

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
}from "react-router-dom";

function App() {
    /* const [toggle_status, setToggle] = useState(false);

    let a =1;
 function toggle(){
    setToggle(!toggle_status) 
     a = a + 1;
} */
 //console.log({a})
    return ( 
    // fregment is same as div <div>
    <Fragment>
  
       <BrowserRouter>
       <ul>
        <li><Link to ="/">Home</Link> </li>
        <li><Link to ="teams">teams</Link> </li>
        <li><Link to ="button">button</Link>  </li>
        <li><Link to ="teams/button">teamsbutton</Link>  </li>
        <li><Link to ="class-button">classbutton</Link>  </li>
       </ul>
       <Routes>
       <Route path ="/">   
{/*        <Route path ="/" element={<h1>APP/Page</h1>}>*/}
          <Route index element ={<h1>Home</h1>} /> 
          <Route path= "class-button" element ={<ButtonClass/>}/>

           <Route path ="button" element={<Button/>}>
           </Route>
           <Route path ="teams" > 
           <Route index element ={<h1>Teams</h1>} /> 
             <Route path ="button" element ={<Button/>}> 
         </Route>
        </Route>
      </Route> 
   
  </Routes>
</BrowserRouter>
 
 
 
     {/* <Button
     type="small"
     /> */}
   {/*  <Button
     type ="big"
     />
  */}
  {/* {
    toggle_status ? "True" : "false"
 }

<button onClick={toggle}>toggle</button>
   */} 
    {/* {
        toggle_status
        &&
    <Button
    type ="big"
        />

        <ButtonClass
     type = "button class"
     />
    } */}

    
    </Fragment>
    
    );
}


export const BigButton = () => {
    return ( 
        <div> 
             
            </div>
    )
}
 
export const SmallButton = () => {

    }
    //export  BigButton
    //export const SmallButton




export default App;

/* module.exports = app;
module.export ={

} */