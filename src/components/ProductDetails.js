import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext";
export default function ProductDetail(){
    const[details, setDetails] = useState(null);
    const [size,setSize] =useState("");
    const [cart, setCart] = useState([]);
    const params = useParams()
    const { addToCart } = useCart();
    // console.log(params)
    useEffect(()=>{
        fetch(`http://localhost:3030/sneakers/${params.id}`)
        .then(res => res.json())
        .then(data => setDetails(data))
    },[params.id])
    // console.log(details)
    if (!details) return <h2>Loading...</h2>
    function handleFocus(e){
        e.preventDefault();
        setSize(e.target.value);
    }
    // console.log(size)
    function handleAddCart(){
        // if(!cart.find(item => item.id === details.id)){
            addToCart(details);
        // }
    // console.log(cart);
    }
    // console.log(cart.length)
    return(
        <div id="details">
            <div id="details_img">
            <img src={details.imageURL} alt={details.name}/>
            <div id="cart-bottom">
               <div>
               <p>Price: <b>${details.price}</b></p>
               <p>Size: <button onFocus={handleFocus} className="details_btn" value="4">4</button><button onFocus={handleFocus} className="details_btn" value="5">5</button><button onFocus={handleFocus} className="details_btn" value="6">6</button><button onFocus={handleFocus} className="details_btn" value="7">7</button><button onFocus={handleFocus} className="details_btn" value="8">8</button></p>
                </div> 
            
            <button onClick={handleAddCart} className="btn" > <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>

            </div>
            <div id="product_info">
                <div id="desc">
                    <h2>{details.name}</h2>
                    <p>{details.description}</p>
                    <button className="btn" onClick={handleAddCart} style={{width:"90%"}}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>

                </div>
            <h4>Product Info</h4>
           
            <p><b>Category: </b>{details.category.toLowerCase()}</p>
            <p><b>Brand:    </b>{details.brand.toLowerCase()}</p>
            <p><b>Gender:   </b>{details.gender.toLowerCase()}</p>
            




            </div>
        </div>
    )
}