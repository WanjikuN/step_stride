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
}