import { useEffect, useState } from "react"
import Product from "./Product";
import Filter from "./Filter";
export default function Products(){
    const[sneakers, setSneakers] = useState([]);
    const[sname, setName] = useState("");
    const[selectedGender,setSelectedGender] = useState("All")
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
    function handleGender(e){
        e.preventDefault();
        setSelectedGender(e.target.value);
    }
    const sortedGender = selectedGender ==="All"? sneakersDisplay: sneakersDisplay.filter(s=>s.gender.toLowerCase() === selectedGender.toLowerCase());
    
    return (
        <div id ="products-cont">
        <Filter handleName={handleName} handleGender={handleGender}/>
        <div id="products">
            {/* Map through sneakers and display each  */}
        {sortedGender.map(sneaker=>{
            return <Product key={sneaker.id} name={sneaker.name} brand={sneaker.brand} gender={sneaker.gender} category={sneaker.category} price={sneaker.price} stock={sneaker.items_left} url={sneaker.imageURL}/>
        })}
        </div>
        </div>
    )
}