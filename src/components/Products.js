import { useEffect, useState } from "react"
import Product from "./Product";
export default function Products(){
    const[sneakers, setSneakers] = useState([]);
    // console.log(sneakers)
    // fetch  from the json db and assign them to sneakers
    useEffect(()=>{
        fetch('http://localhost:3030/sneakers')
        .then(res => res.json())
        .then(data => setSneakers(data))
    },[])
    return (
        <div id="products">
            {/* Map through sneakers and display each  */}
        {sneakers.map(sneaker=>{
            return <Product key={sneaker.id} name={sneaker.name} brand={sneaker.brand} gender={sneaker.gender} category={sneaker.category} price={sneaker.price} stock={sneaker.items_left} url={sneaker.imageURL}/>
        })}
        </div>
    )
}