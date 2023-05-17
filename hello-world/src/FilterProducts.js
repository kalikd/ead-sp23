import { useState } from "react";
import { useSearchParams } from "react-router-dom"
export default function FilterProducts(){
    const [searchParams, setSearchparam] = useSearchParams();
    const [color, setColor] = useState('')
    const [price, setPrice] = useState(0)

    function handleChangeColor(event){
        setColor(event.target.value);
        searchParams.set('color', event.target.value);
        //searchParams.set('price', price);
        setSearchparam(searchParams)
    }
    function handleChangePrice(event){
        setPrice(event.target.value)
        //setSearchparam({price:event.target.value, color})
        searchParams.set('price', event.target.value);
        setSearchparam(searchParams)
    }

    return <>
        <h1>Filter Products</h1>
        <span>Color: {searchParams.get('color')}</span>
        <span>Price: {searchParams.get('price')}</span>
        <input type='text' name="color" onChange={handleChangeColor} />
        <input type='number' name="price" onChange={handleChangePrice} />
        {/* <button onClick={handleChangeColor}>Add Color</button>
        <button onClick={handleChangePrice}>Add Price</button> */}
    </>
}