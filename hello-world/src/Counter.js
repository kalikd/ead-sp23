import { useState } from "react"
import React from "react";

export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = { count:0, name:'KD' }
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    // increment = () => {
    //     this.setState({count: this.state.count+1})
    // }
    // decrement = () => {
    //     this.setState({count: this.state.count-1})
    // }
    increment(){
        //this.setState({count: this.state.count+1})
        this.setState((prevState, props) => ({...prevState, count: prevState.count+ +props.offset}), function(){
            // Here you can get current updated state 
            console.log(this.state);
        })
        //this.setState((prevState, props) => ({...prevState, name:'ABC'}))
    }
    decrement(){
        this.setState({count: this.state.count-1})
    }

    render(){
       return <>
        <button onClick={() => this.increment()}>+</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.decrement()}>-</button>
    </>
    }
}



// export default function Counter(props){
//     const [count, setCount] = useState(0);
//     const [person, setPerson] = useState({name:'Umar', age:5});
//     const [subjects, setSubjects] = useState(['EAD', 'SD', 'OAD','DS']);

//     // const [obj, setObj] = useState({
//     //     name:'Umar', 
//     //     age:5, 
//     //     subjects:['EAD', 'SD', 'OAD','DS'], 
//     //     count:0
//     // })
   
//     function addProp(){
//         // setPerson({...person, age:person.age+1})
//         //setSubjects([...subjects, 'OOP'])
//         setPerson(prevState => ({...prevState, city:'SUK', age: prevState.age + +props.offset}))

//         // setObj({...obj, count:obj.count+1})
        
//     }
//     function increment(){
//         setCount(count+1)
        
//     }
//     function decrement(){
//         setCount(count-1)
//     }
//     return <>
//         <p>{JSON.stringify(person)}</p>
//         <button onClick={addProp}>Update State</button>
//         <button onClick={increment}>+</button>
//         <span>{count}</span>
//         <button onClick={decrement}>-</button>
//     </>
// }