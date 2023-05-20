import { useState } from "react";

export default function Counter(props){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }
    return <>
        {
        props.children(count, increment)
        }
    </>

}