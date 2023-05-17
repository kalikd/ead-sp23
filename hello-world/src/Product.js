import React from "react";
import { Link, Outlet } from "react-router-dom";

export default class Product extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
       
    }

    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> {
                this.setState({products: data});
            })
    }

   
    render(){
       return <>
       <Outlet />
            <ul>
                <li>
                    <Link to={'product-details'}>Product Detail</Link>
                </li>
                <li>
                    <Link to={'/product'}> Related Product </Link>
                </li>
            </ul>
            
        {/* <ul>
          {this.state?.products?.map(product => <li key={product.id}>{product.title}</li>)}
        </ul> */}
    </>
    }
}