import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
export default function ProductDetail(){
    const[details, setDetails] = useState(null);
    const params = useParams()
    console.log(params)
    useEffect(()=>{
        fetch(`http://localhost:3030/sneakers/${params.id}`)
        .then(res => res.json())
        .then(data => setDetails(data))
    },[params.id])
    console.log(details)
    if (!details) return <h2>Loading...</h2>
    
    return(
        <div id="details">
            <div id="details_img">
            <img src={details.imageURL} alt={details.name}/>
            <p>Price: <b>${details.price}</b></p>
            <button className="btn">Add to Cart</button>
            </div>
            <div id="product_info">
                <div id="desc">
                    <h2>{details.name}</h2>
                    <p>{details.description}</p>
                </div>
            <h4>Product Info</h4>
           
            <p><b>Category: </b>{details.category.toLowerCase()}</p>
            <p><b>Brand:    </b>{details.brand.toLowerCase()}</p>
            <p><b>Gender:   </b>{details.gender.toLowerCase()}</p>
            




            </div>
        </div>
    )
}