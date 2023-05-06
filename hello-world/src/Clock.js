import React from "react";
import { useState, useEffect } from "react";

// export default class Clock extends React.Component {
//     timerId = undefined;
//     constructor(props){
//         super(props);
//         this.state = {time: new Date()};
       
//     }

//     tick(){
//         this.setState({time: new Date()});
//     }

//     componentDidMount(){
//         timerId = setInterval(()=>{
//             this.tick()
//         }, 1000)
//     }
//     componentDidUpdate(props){

//     }

//     componentWillUnmount(){
//         clearInterval(this.timerId);
//     }

   
//     render(){
//        return <>
//        <h2>{this.state.time.toLocaleTimeString()}</h2>
//     </>
//     }
// }

export default function Clock(){
    const [time, setTime] = useState(new Date());
    function tick(){
        setTime(new Date());
    }

    useEffect(()=>{
        setInterval(()=>{
            tick()
        }, 1000)
    }, [])
    return <>
           <h2>{time.toLocaleTimeString()}</h2>
        </> 
}