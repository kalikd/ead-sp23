import './App.css';
import Button from 'react-bootstrap/Button'
import Profile from './Profile';
import React from 'react'
import Counter from './Counter'
import Product from './Product';
import Clock from './Clock';
import Parent from './Parent'
import SignUp from './Signup';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route} from 'react-router-dom'
import ProductDetails from './ProductDetails';
import FilterProducts from './FilterProducts';
import withCenter from './CenterHOC';
import Dashboard from './Dashboard';
import Login from './Login';
import ClickCounter from './ClickCounter';
import KeypressCounter from './KeypressCounter';
import { PersonProvider } from './PersonContext';
import A from './A';



function NotFound(){
  return <>
  <h1 style={{color:'red'}}>Not Found!</h1>
  </>
}
function RelatedProducts(){
  return <>
  <h1>Related Products</h1>
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
  return (
    <div>
     {/* <Navbar /> */}
     {/* <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />

        <Route path='/product' element={<Product/>}>
          <Route index element={<RelatedProducts/>} />
          <Route path='product-details/:pid' element={<ProductDetails/>} />
          <Route path='filter-products' element={<FilterProducts/>} />
          
        </Route>

        <Route path='*' element={<NotFound/>} />
        
     </Routes> */}
     {/* <Counter>
      {(count,increment)=> ( <ClickCounter count={count} increment={increment} />)}  
    </Counter> 
     <br/> */}
     {/* <Counter render={(count,increment)=> ( <KeypressCounter count={count} increment={increment} />)} /> */}
     {/* <KeypressCounter/> */}
     <PersonProvider value={'Ali'}>
        <A/>
     </PersonProvider>
     
    </div>
  );
}


export default  App;
