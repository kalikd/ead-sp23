import { useState } from "react"

export default function Parent(){
    const [name, setName] = useState('')
    function handleChange(name){
        setName(name)
    }
    return <>
        <h1> Parent Component</h1>
        <strong>{name}</strong>
        <Child nameChangeHandler={handleChange}/>
    </>
}

function Child(props){
    function changeParentState(){
        props.nameChangeHandler('KD')
    }
    return <>
        <h1>Child Component</h1>
        <strong></strong>
        <button onClick={() =>  props.nameChangeHandler('KD')}>Change Me</button>
    </>
}