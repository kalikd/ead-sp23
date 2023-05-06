import './App.css';
import Button from 'react-bootstrap/Button'
import Profile from './Profile';
import React from 'react'
import Counter from './Counter'
import Product from './Product';
import Clock from './Clock';
import Parent from './Parent'
import 'bootstrap/dist/css/bootstrap.min.css'


function Login(){
  return <>
  <h1>Login Page</h1>
  </>
}

function Dashboard(){
  return <>
  <h1>Dashboard</h1>
  </>
}

class About extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    return <h1>About Us!</h1>
  }
}


function App() {
  const style = {color:'red'}
  const isLoggedIn = true;
  const element = isLoggedIn ? <Dashboard/>: <Login/>
  const person = {name:'John', city:'San Francisco' }
  

  return (
    <div className="App" >
      {/* {isLoggedIn ? <Dashboard/>: <Login/>}
      {isLoggedIn ? <About/>: <Login/>} */}
      {/* {isLoggedIn && <Dashboard/>} */}
      {/* {element} */}
      {/* {<strong style={style}>{'Hello '+ FullName}</strong> } */}
     {/* <Button variant="success">Hello {FullName}</Button> */}
     <Profile person={person}  score={30}>
        <div>
          <h1>Hello Class!</h1>
        </div>

     </Profile>
     {/* <Counter offset='5'/> */}
     {/* <Product /> */}
     {/* <Clock />
     <Parent /> */}
    </div>
  );
}


export default App;
