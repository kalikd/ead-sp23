import C from './C'
import { useContext } from 'react'
import { PersonContext } from './PersonContext'
export default function B(props){
   const person = useContext(PersonContext)
   
 return <>
    <h1>Component B</h1>
    <h3>Hi {person}!</h3>
    <C/>
 </>
}