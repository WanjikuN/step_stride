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
             <p><b>${item.price}</b></p>
        </div>
        <div id="cart2">
            <div></div>
            <button id="btnCart">Remove</button>
            
            </div>
            
            </div>
    )
}