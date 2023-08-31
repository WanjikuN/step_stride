<<<<<<< HEAD
export default function CartItem ({item}){
    return(
     <div id="cartContainer">
        <div id="cart1">
             <div id="cartimage">
                <img src={item.imageURL}alt={item.name}/>
                <div id="cartname">
                    <h3>{item.name}</h3>
                    <p>
                        {item.gender}
                    </p>
                </div>
             </div>
             <p>{item.price}</p>
        </div>
        <div id="cart2">
<button>remove</button>
            </div></div>
    )
=======
import React from 'react';
export default function CartItem ({item, handleDelete}){
    return(
     <div id="cartContainer">
        <div id="cart1">
             <div id="cartimage">
                <img src={item.imageURL}alt={item.name}/>
                <div id="cartname">
                    <h3>{item.name}</h3>
                    <p>
                        {item.gender}
                    </p>
                </div>
             </div>
             <p><b>${item.price}</b></p>
        </div>
        <div id="cart2">
            <div></div>
            <button onClick={() => handleDelete(item.id)}id="btnCart">🗑️Remove</button>
            
            </div>
            
            </div>
    )
>>>>>>> 21604f54746fb1b8544d84d3ffecd9c80bec6dc4
}