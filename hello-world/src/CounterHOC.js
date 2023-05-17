import { useState } from 'react';
export default function withCounter(WrappedComponent){
    function NewComponent(props){
        const [count, setCount] = useState(0)
        function increment(){
            setCount(prev => prev+1);
        }
        return <WrappedComponent count={count} increment={increment} {...props} />
    }
   return NewComponent;
}