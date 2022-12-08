import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/reducer/counter';

export default function TinyText(props){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

   function handleChange ()
   {
    props.setState("update value")
   }
   
return(
    <>
    <h1>{count}</h1>
    <button onClick ={()=>{dispatch(increment())}}>increment</button>
    <button onClick ={()=>{dispatch(decrement())}}>decrement</button>
    <button onClick ={()=>{dispatch(incrementByAmount(100))}}>increment 100</button>

    </>
)

    return(
       <span className='tiny'> {props.title} </span>
)
}
