import { useState, useReducer } from "react";

const initialState = 0
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':{
            return state + action.value
        }
        case 'decrement':{
            return state - action.value
        }
        default: {
            return state
        }
    }

}


export default function Counter(props){
    const [state, dispatch] = useReducer(reducer, initialState);

   
    return <>
     <button onClick={()=> dispatch({type:'increment', value: 5})}>+</button>
     <label>{state}</label>
     <button onClick={()=> dispatch({type: 'decrement', value: 2})}>-</button>
    </>

}