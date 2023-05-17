import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails(){
    const { pid } = useParams();
    return <>
       <h1>Product Details</h1>
       <h3>{pid}</h3>
    </>
}