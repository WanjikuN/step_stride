import { useEffect, useState } from "react"
import Product from "./Product";
import Filter from "./Filter";
export default function Products(){
    const[sneakers, setSneakers] = useState([]);
    const[sname, setName] = useState("");
    // console.log(sneakers)
    // fetch  from the json db and assign them to sneakers
    useEffect(()=>{
        fetch('http://localhost:3030/sneakers')
        .then(res => res.json())
        .then(data => setSneakers(data))
    },[])
    function handleName(e){
        e.preventDefault();
        setName(e.target.value);
    }
    // filter sneakers 
    const sneakersDisplay = sneakers.filter(sneaker=>{
        if(sneakers === "") return true;
        return sneaker.name.toLowerCase().includes(sname.toLowerCase())
    })
    return (
        <div id ="products-cont">
        <Filter handleName={handleName}/>
        <div id="products">
            {/* Map through sneakers and display each  */}
        {sneakersDisplay.map(sneaker=>{
            return <Product key={sneaker.id} name={sneaker.name} brand={sneaker.brand} gender={sneaker.gender} category={sneaker.category} price={sneaker.price} stock={sneaker.items_left} url={sneaker.imageURL}/>
        })}
        </div>
        </div>
    )
}