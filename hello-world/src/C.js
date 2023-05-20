import { PersonConsumer, PersonContext } from "./PersonContext"
import React from "react"

class C extends React.Component{
   constructor(props){
      super(props)
   }


   render(){
      return <>
      <h1>{this.context}</h1>
         {/* <PersonConsumer>
            {
               (name) => {return <><h1>Component C</h1> <h3>Hello {name}</h3></>}
            }
         </PersonConsumer> */}
         
      </>
   }
}

C.contextType = PersonContext


export default C;

