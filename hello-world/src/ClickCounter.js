import { useState } from "react";
import withCenter from "./CenterHOC";
import withCounter from "./CounterHOC";

function ClickCounter(props){
    return <>
       <h3>Hi !</h3>
       <label onClick={props.increment}> You clicked me {props.count}x times.</label>
    </>
}

export default ClickCounter;